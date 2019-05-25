import { Invoice } from '../models/invoice';

export interface AppState {
    readonly invoice: Invoice[];
  }
