import { ICustomerData } from './icustomer-data';
import { ITransactionsData } from './itransactions-data';

export interface ICustomerTransaction {
  transaction: ITransactionsData;
  customer: ICustomerData;
}

export interface ICustomerTransactions extends Array<ICustomerTransaction> {}
