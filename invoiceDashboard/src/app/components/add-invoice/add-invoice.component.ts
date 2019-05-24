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

  addTutorial(id, subject, amount) {
    const date = '';
    console.log(id);
    console.log(subject);
    console.log(amount);

    this.store.dispatch(new InvoiceActions.AddInvoice({id : id, subject:subject,amount: amount, date:date}) );
  }

  ngOnInit() {
  }

}
