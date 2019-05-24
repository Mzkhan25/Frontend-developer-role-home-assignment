import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/invoice.reducer';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      invoice: reducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
