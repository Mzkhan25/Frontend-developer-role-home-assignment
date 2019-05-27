import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Invoice } from '../models/invoice';
import { AppState } from '../store/app.state';

import * as InvoiceActions from "../store/actions/invoice.actions";

@Injectable({
  providedIn: 'root'
})
export class AppstateService {

  constructor(private store: Store<AppState>) { }

  getStore() {
    return this.store.select('invoice');
  }

  addItem(invoice: Invoice) {
    return this.store.dispatch(new InvoiceActions.AddInvoice(invoice));
  }

  editItem(invoice: Invoice) {
    return this.store.dispatch(new InvoiceActions.EditInvoice(invoice));
  }

  deleteItem(id: number) {
    return this.store.dispatch(new InvoiceActions.RemoveInvoice(id));
  }
}
