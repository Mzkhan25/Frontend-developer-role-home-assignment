import { Action } from '@ngrx/store';
import { Invoice } from '../../models/invoice';
import * as InvoiceActions from './../actions/invoice.actions';



const initialState: Invoice = {
   id: 4,
   date: Date.now().toString(),
   title: 'muiz',
   amount : 1,
   iban:''
};

// Section 2
export function reducer(state: Invoice[] = [initialState], action: InvoiceActions.Actions) {

    // Section 3
    switch (action.type) {
        case InvoiceActions.ADD_INVOICE:
            console.log(action);
            return [...state, action.payload];
        case InvoiceActions.REMOVE_INVOICE:
            return  state.splice(action.payload, 1);
            case InvoiceActions.REMOVE_INVOICE:
                return  state.splice(action.payload, 1);
        default:
            console.log(state);
            return state;
    }
}
