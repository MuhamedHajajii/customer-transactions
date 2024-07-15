import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomerData } from '../interfaces/icustomer-data';

@Injectable({
  providedIn: 'root',
})
export class CustomerTransactionsService {
  constructor(private _HttpClient: HttpClient) {}
  getAllCustromersData(): Observable<ICustomerData[]> {
    return <Observable<ICustomerData[]>>(
      this._HttpClient.get('https://database-json-red.vercel.app/customers')
    );
  }
}
