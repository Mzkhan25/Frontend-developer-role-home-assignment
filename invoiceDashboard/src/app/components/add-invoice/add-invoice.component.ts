import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

import * as InvoiceActions from '../../store/actions/invoice.actions';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addTutorial(id, title, amount, iban) {
    const date = '';
    this.store.dispatch(new InvoiceActions.AddInvoice({id, title, amount, date, iban}) );
  }

  ngOnInit() {
  }

}
