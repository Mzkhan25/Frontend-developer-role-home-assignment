import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  invoices: Observable<Invoice[]>;

  // Section 2
  constructor(private store: Store<AppState>) {
    this.invoices = store.select('invoice');
  }

  // delTutorial(index) {
  //   this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  // }

  ngOnInit() {}

}
