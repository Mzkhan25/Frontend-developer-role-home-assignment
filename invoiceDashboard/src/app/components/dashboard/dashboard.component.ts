import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as InvoiceActions from '../../store/actions/invoice.actions';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  invoices: Observable<Invoice[]>;
  displayedColumns: string[] = ['date', 'title', 'amount', 'iban', 'changes'];
  dataSource: any;
  constructor(private router: Router, private store: Store<AppState>, public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(InvoiceDialogComponent, { width: '50%', height : '50%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  addNew() {
    this.router.navigate(['/add']);
  }

  ngOnInit() {
    this.invoices = this.store.select('invoice');
    this.dataSource = this.invoices;
  }
  deleteInvoice(id: number) {
    console.log(id);
    this.store.dispatch(new InvoiceActions.RemoveInvoice(id) );
  }

  editInvoice(id: number) {
    console.log(id);
    // this.store.dispatch(new InvoiceActions.RemoveInvoice(id) );
  }

}
