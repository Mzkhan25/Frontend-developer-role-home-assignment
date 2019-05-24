import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Invoice } from './../models/invoice';

export const ADD_INVOICE       = '[Invoice] Add';
export const REMOVE_INVOICE    = '[Invoice] Remove';
export const EDIT_INVOICE    = '[Invoice] Edit';

export class AddInvoice implements Action {
    readonly type = ADD_INVOICE;

    constructor(public payload: Invoice) {}
}

export class RemoveInvoice implements Action {
    readonly type = REMOVE_INVOICE;

    constructor(public payload: number) {}
}
export class EditInvoice implements Action {
    readonly type = EDIT_INVOICE;

    constructor(public payload: number) {}
}


export type Actions = AddInvoice | RemoveInvoice | EditInvoice ;
