import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BankService {

  itemUrl = 'https://raw.githubusercontent.com/Mzkhan25/General-Resources/master/Json%20Files/bankRecords.json';

  constructor(private httpClient: HttpClient) {
  }
  getBankData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.itemUrl);
 }
}
