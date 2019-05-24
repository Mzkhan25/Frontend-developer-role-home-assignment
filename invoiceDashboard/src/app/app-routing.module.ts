import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add', component: AddInvoiceComponent },
  { path: 'edit/:id', component: AddInvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
