import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {

  constructor(private store: Store<AppState>) { }
  getStore(): any {
    return this.store.select('invoice');
 }


}
