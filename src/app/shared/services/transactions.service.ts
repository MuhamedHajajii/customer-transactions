import { Injectable } from '@angular/core';
import { ITransactionsData } from '../interfaces/itransactions-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private _HttpClient: HttpClient) {}
  getAllTransactionsData(): Observable<ITransactionsData[]> {
    return <Observable<ITransactionsData[]>>(
      this._HttpClient.get('https://database-json-red.vercel.app/transactions')
    );
  }
}
