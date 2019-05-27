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
            const filteredState = state.filter(data => data.id !== action.id);
            return filteredState;
        case InvoiceActions.EDIT_INVOICE:
            let editedState = state.find(data => data.id === action.payload.id);
            editedState = action.payload;
            return [...state];
        default:
            return state;
    }
}
