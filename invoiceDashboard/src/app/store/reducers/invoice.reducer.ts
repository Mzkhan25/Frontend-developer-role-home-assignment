import { Action } from '@ngrx/store';
import { Invoice } from '../../models/invoice';
import * as InvoiceActions from './../actions/invoice.actions';



const initialState: Invoice = {
    id: 1,
    date: Date.now().toString(),
    title: 'muiz',
    amount: 1,
    iban: ''
};

export function reducer(state: Invoice[] = [initialState], action: InvoiceActions.Actions) {

    switch (action.type) {
        case InvoiceActions.ADD_INVOICE:
            length = state.length;
            action.payload.id = length + 1;
            return [...state, action.payload];
        case InvoiceActions.REMOVE_INVOICE:
            const removeFilter = state.filter(data => data.id !== action.id);
            return removeFilter;
        case InvoiceActions.EDIT_INVOICE:
             let editFilter = state.find(data => data.id === action.payload.id);
             editFilter = action.payload;
             return [...state ];
        default:
            console.log(state);
            return state;
    }
}
