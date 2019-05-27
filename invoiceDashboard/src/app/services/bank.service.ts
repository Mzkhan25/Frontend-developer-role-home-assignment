import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BankInformation } from '../models/bank-information';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private itemUrl = 'https://raw.githubusercontent.com/Mzkhan25/General-Resources/master/Json%20Files/bankRecords.json';

  constructor(private httpClient: HttpClient) {  }

  getBankData(): Observable<BankInformation[]> {
    return this.httpClient.get<BankInformation[]>(this.itemUrl);
  }
}
