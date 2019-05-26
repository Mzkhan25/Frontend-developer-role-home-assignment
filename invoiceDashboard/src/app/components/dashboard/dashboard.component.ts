import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as InvoiceActions from '../../store/actions/invoice.actions';
import { JsonPipe } from '@angular/common';
import { AppstateService } from 'src/app/services/appstate.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store<AppState>, public dialog: MatDialog, private appStateService: AppstateService) { }

  invoices: Observable<Invoice[]>;
  displayedColumns: string[] = ['date', 'title', 'amount', 'iban', 'changes'];
  dataSource: any;
  invoice: Invoice;
  editInvoice(id: number): void {
    const dialogRef = this.dialog.open(InvoiceDialogComponent, { width: '50%', height: '50%',
    data: id });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  addNewInvoice(): void {
    const dialogRef = this.dialog.open(InvoiceDialogComponent, { width: '50%', height: '50%',
    data: -1 });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  ngOnInit() {
    this.appStateService.getStore().subscribe(data => {
      this.dataSource = data;
    });
  }
  deleteInvoice(id: number) {
    console.log(id);
    this.store.dispatch(new InvoiceActions.RemoveInvoice(id));
  }
}
