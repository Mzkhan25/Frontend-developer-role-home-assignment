import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as InvoiceActions from '../../store/actions/invoice.actions';
import { Invoice } from 'src/app/models/invoice';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})

export class InvoiceDialogComponent implements OnInit {
  selectedTab = 0;
  date: any;
  title: string;
  amount: number;
  iban: string;
  invoice: Invoice;
  constructor(
    public dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private store: Store<AppState>) { }


  onNoClick(): void {
    this.dialogRef.close();
  }
  changeTab() {
    this.selectedTab = 1;
  }
  addNewPayment(id, title, date, amount, iban) {
    this.store.dispatch(new InvoiceActions.AddInvoice({id, title, amount, date, iban}) );
    this.dialogRef.close();
  }
  ngOnInit() {}

}
