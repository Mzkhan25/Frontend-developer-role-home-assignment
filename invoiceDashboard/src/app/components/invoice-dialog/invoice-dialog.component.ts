import { Component, OnInit, Inject } from "@angular/core";

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as InvoiceActions from "../../store/actions/invoice.actions";
import { Invoice } from "src/app/models/invoice";
import { BankService } from "src/app/services/bank.service";
import { BankInformation } from "src/app/models/bank-information";
import { Observable } from "rxjs";
import { AppstateService } from "src/app/services/appstate.service";

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
    private store: Store<AppState>,
    private bankService: BankService,
    private appStateService: AppstateService
  ) {
    this.bankPaymentCheck = false;
    if (this.data !== null && this.data !== undefined && this.data !== -1) {
      this.getRentRecord();
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
  addNewPayment(id, title, date, amount, iban) {
    this.store.dispatch(
      new InvoiceActions.AddInvoice({
        id,
        title,
        amount,
        date,
        iban
      })
    );
    this.dialogRef.close();
  }
  ngOnInit() {
    this.getBankInformation();
  }

  getBankInformation() {
    this.bankService.getBankData().subscribe(data => {
      this.bankInformation = data;
    });
  }

  informationSelected(value) {
    this.bankInfo = value;
  }
  addNewPaymentThroughBank(id, title, date) {
    if (this.data === -1) {
      const amount = this.bankInfo.amount;
      const iban = this.bankInfo.iban;
      this.store.dispatch(
        new InvoiceActions.AddInvoice({
          id,
          title,
          amount,
          date,
          iban
        })
      );
    } else {
      this.invoice.title = title;
      this.invoice.date = date;
      this.invoice.amount = this.bankInfo.amount;
      this.invoice.iban = this.bankInfo.iban;
      this.store.dispatch(new InvoiceActions.EditInvoice(this.invoice));
    }

    this.dialogRef.close();
  }
}
