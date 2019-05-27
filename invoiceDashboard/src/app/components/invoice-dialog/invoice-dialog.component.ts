import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Observable } from 'rxjs';

import { AppstateService } from 'src/app/services/appstate.service';
import { Invoice } from 'src/app/models/invoice';
import { BankService } from 'src/app/services/bank.service';
import { BankInformation } from 'src/app/models/bank-information';



@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})
export class InvoiceDialogComponent implements OnInit {

  // Variables
  selectedTab = 0;
  invoiceId: number;
  invoice: Invoice;

  bankInfo: BankInformation;
  bankInformation: BankInformation[];

  bankInformation$: Observable<BankInformation[]>;
  invoices: Observable<Invoice[]>;

  mobileBankTransaction: boolean;
  bankPaymentCheck: boolean;

  constructor(
    public dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private bankService: BankService,
    private appStateService: AppstateService
  ) { }

  ngOnInit() {

    this.getBankInformation();
    this.bankPaymentCheck = false;
    this.mobileBankTransaction = false;

    if (this.data !== null && this.data !== undefined && this.data !== -1) {
      this.getRentRecord();
    } else {
      this.initInterfaces();
    }
  }

  initInterfaces() {

    this.invoice = {
      iban: '',
      amount: 0,
      date: '',
      title: '',
      id: -1
    };

    this.bankInfo = {
      iban: '',
      amount: -1,
      id: -1
    };
  }

  // Helper Functions

  onNoClick(): void {

    this.dialogRef.close();
  }

  changeTab() {

    this.selectedTab = 1;
    this.bankPaymentCheck = true;
  }

  informationSelected(value) {

    this.bankInfo = value;
  }

  useBankTransactions() {

    this.mobileBankTransaction = ! this.mobileBankTransaction;
  }

  // Get Functions

  getBankInformation() {

    this.bankService.getBankData().subscribe(data => {
      this.bankInformation = data;
    });
  }

  getRentRecord() {

    this.invoices = this.appStateService.getStore();
    this.invoices.subscribe(data => {
      this.invoice = data.find(rent => rent.id === this.data);

      if (this.invoice.iban) {
        this.bankPaymentCheck = true;
      }
    });
  }

  // Save Methods

  addNewPaymentDesktop() {

    if (this.data === -1) {
      this.appStateService.addItem(this.invoice);
    } else {
      this.appStateService.editItem(this.invoice);
    }

    this.dialogRef.close();
  }

  addNewPaymentThroughBankDesktop() {
    this.invoice.amount = this.bankInfo.amount;
    this.invoice.iban = this.bankInfo.iban;

    if (this.data === -1) {
      this.appStateService.addItem(this.invoice);
    } else {
      this.appStateService.editItem(this.invoice);
    }

    this.dialogRef.close();
  }
}
