import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, Subscription } from 'rxjs';

import { Invoice } from 'src/app/models/invoice';
import { AppstateService } from 'src/app/services/appstate.service';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  // Variables 
  invoices: Observable<Invoice[]>;
  displayedColumns: string[] = ['date', 'title', 'amount', 'iban', 'changes'];
  dataSource: any;
  invoice: Invoice;
  appStateSubscription: Subscription;

  constructor(public dialog: MatDialog, private appStateService: AppstateService) { }

  ngOnInit() {
    this.appStateSubscription = this.appStateService.getStore().subscribe((data: Observable<Invoice[]>) => {
      this.dataSource = data;
      this.invoices = data;
    });
  }

  // Dialog modules
  editInvoice(id: number): void {
    const dialogRef = this.dialog.open(InvoiceDialogComponent, {
      width: '50%',
      height: '50%',
      data: id
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  addNewInvoice(): void {
    const dialogRef = this.dialog.open(InvoiceDialogComponent, {
      width: '50%',
      height: '50%',
      data: -1
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  // Delete method
  deleteInvoice(id: number) {
    this.appStateService.deleteItem(id);
  }
 
  //Subscription CleanUp
  ngOnDestroy(): void {
    this.appStateSubscription.unsubscribe();
  }
}
