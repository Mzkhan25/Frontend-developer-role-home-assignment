import { Action } from '@ngrx/store';
import { Invoice } from './../models/invoice';
import * as InvoiceActions from './../actions/invoice.actions';
import { stat } from 'fs';


const initialState: Invoice = {
   id: 0,
   date: Date.now().toString(),
   subject: '',
   amount : 0
};

// Section 2
export function reducer(state: Invoice[] = [initialState], action: InvoiceActions.Actions) {

    // Section 3
    switch (action.type) {
        case InvoiceActions.ADD_INVOICE:
            return [...state, action.payload];
        case InvoiceActions.REMOVE_INVOICE:
            return  state.splice(action.payload, 1);
            case InvoiceActions.REMOVE_INVOICE:
                return  state.splice(action.payload, 1);
        default:
            return state;
    }
}
