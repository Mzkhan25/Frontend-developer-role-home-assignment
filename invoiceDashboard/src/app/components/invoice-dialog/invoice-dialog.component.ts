import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Observable, Subscription } from 'rxjs';

import { AppstateService } from 'src/app/services/appstate.service';
import { Invoice } from 'src/app/models/invoice';
import { BankService } from 'src/app/services/bank.service';
import { BankInformation } from 'src/app/models/bank-information';



@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})
export class InvoiceDialogComponent implements OnInit, OnDestroy {
  
  // Variables
  selectedTab = 0;
  invoiceId: number;
  invoice: Invoice;
  searchString: string;

  bankInfo: BankInformation;
  bankInformation: BankInformation[];

  bankInformation$: Observable<BankInformation[]>;
  invoices: Observable<Invoice[]>;

  mobileBankTransaction: boolean;
  bankPaymentCheck: boolean;
  bankRecordChecked: boolean;

  bankSubscription: Subscription;
  invoiceSubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private bankService: BankService,
    private appStateService: AppstateService
  ) { }

  ngOnInit() {

    this.getBankInformation();
    this.initBank();
    if (this.data !== null && this.data !== undefined && this.data !== -1) {
      this.getRentRecord();
    } else {
      this.initInvoice();
    }
    this.initBooleanChecks();
  }

  //Initializing Modules
  initBooleanChecks() {
    this.bankPaymentCheck = false;
    this.mobileBankTransaction = false;
    this.bankRecordChecked = false;
  }

  initInvoice() {
    this.invoice = {
      iban: '',
      amount: 0,
      date: '',
      title: '',
      id: -1
    };
  }

  initBank() {
    this.bankInfo = {
      iban: '',
      amount: 0,
      id: -1
    };
  }

  // Helper Functions

  changeTab() {
    this.selectedTab = 1;
    this.bankPaymentCheck = true;
  }

  informationSelected(value: BankInformation) {
    this.bankInfo = value;
    this.bankRecordChecked = false;
  }

  useBankTransactions() {
    this.mobileBankTransaction = !this.mobileBankTransaction;
  }

  // Get Functions

  getBankInformation() {
    this.bankSubscription = this.bankService.getBankData().subscribe(data => {
      this.bankInformation = data;
    });
  }

  getRentRecord() {
    this.invoices = this.appStateService.getStore();
    this.invoiceSubscription = this.invoices.subscribe(data => {
      this.invoice = data.find(rent => rent.id === this.data);
      if (this.invoice.iban) {
        this.bankPaymentCheck = true;
      }

      this.bankInfo.amount = this.invoice.amount;
    });
  }

  // Save Methods

  addNewPayment() {
    if (this.data === -1) {
      this.appStateService.addItem(this.invoice);
    } else {
      this.appStateService.editItem(this.invoice);
    }

    this.dialogRef.close();
  }

  addNewPaymentThroughBank() {
    this.invoice.amount = this.bankInfo.amount;
    this.invoice.iban = this.bankInfo.iban;

    if (this.data === -1) {
      this.appStateService.addItem(this.invoice);
    } else {
      this.appStateService.editItem(this.invoice);
    }

    this.dialogRef.close();
  }

  //Subscription CleanUp
  ngOnDestroy(): void {
    this.bankSubscription.unsubscribe();
    this.invoiceSubscription.unsubscribe();
  }
}
