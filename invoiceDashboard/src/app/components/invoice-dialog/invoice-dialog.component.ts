import { Component, OnInit, Inject } from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { Observable } from "rxjs";

import { AppstateService } from "src/app/services/appstate.service";
import { Invoice } from "src/app/models/invoice";
import { BankService } from "src/app/services/bank.service";
import { BankInformation } from "src/app/models/bank-information";



@Component({
  selector: "app-invoice-dialog",
  templateUrl: "./invoice-dialog.component.html",
  styleUrls: ["./invoice-dialog.component.css"]
})
export class InvoiceDialogComponent implements OnInit {
  selectedTab = 0;
  date: any;
  title: string;
  amount: number;
  iban: string;
  invoices: Observable<Invoice[]>;
  invoice: Invoice;
  bankInfo: BankInformation;
  invoiceId: number;
  bankPaymentCheck: boolean;
  bankInformation: BankInformation[];
  bankInformation$: Observable<BankInformation[]>;


  constructor(
    public dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private bankService: BankService,
    private appStateService: AppstateService
  ) { }

  ngOnInit() {
    this.getBankInformation();
    this.bankPaymentCheck = false;
    if (this.data !== null && this.data !== undefined && this.data !== -1) {
      this.getRentRecord();
    } else {
      this.initInvoice();
    }
  }

  initInvoice() {
    this.invoice = {
      iban: '',
      amount: 0,
      date: '',
      title: '',
      id: -1
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  getRentRecord() {
    this.invoices = this.appStateService.getStore();
    this.invoices.subscribe(data => {
      this.invoice = data.find(rent => rent.id === this.data);
      this.amount = this.invoice.amount;
      this.date = this.invoice.date;
      this.title = this.invoice.title;
      this.iban = this.invoice.iban;
      this.invoiceId = this.invoice.id;
      if (this.iban) {
        this.bankPaymentCheck = true;
      }
    });
  }

  changeTab() {
    this.selectedTab = 1;
    this.bankPaymentCheck = true;
  }

  addNewPayment() {
    if (this.data === -1) {

      this.appStateService.addItem(this.invoice);
    } else {

      this.appStateService.editItem(this.invoice);
    }

    this.dialogRef.close();
  }


  getBankInformation() {
    this.bankService.getBankData().subscribe(data => {
      this.bankInformation = data;
    });
  }

  informationSelected(value) {
    this.bankInfo = value;
  }

  addNewPaymentThroughBank() {
    if (this.data === -1) {

      this.appStateService.addItem(this.invoice);
    }
    else {
      this.invoice.amount = this.bankInfo.amount;
      this.invoice.iban = this.bankInfo.iban;
      this.appStateService.editItem(this.invoice);
    }

    this.dialogRef.close();
  }
}
