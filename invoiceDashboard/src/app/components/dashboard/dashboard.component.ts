import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  invoices: Observable<Invoice[]>;
  displayedColumns: string[] = ['date', 'title', 'amount', 'iban'];
  dataSource: any;
  constructor(private router: Router, private store: Store<AppState>, public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(InvoiceDialogComponent);

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

}
