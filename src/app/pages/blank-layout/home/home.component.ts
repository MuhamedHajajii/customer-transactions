import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { ICustomerData } from './interfaces/icustomer-data';
import { ICustomerTransaction } from './interfaces/icustomertransactions';
import { ITransactionsData } from './interfaces/itransactions-data';
import { CustomerTransactionsService } from './services/customers.service';
import { TransactionsService } from './services/transactions.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('TransctionsTable') TransctionsTable!: Table;

  isSorted: boolean | null = null;
  AllCustomers!: ICustomerData[];
  AllTransactions!: ITransactionsData[];
  customerTransactions: ICustomerTransaction[] = [];

  constructor(
    private _CustomerTransactionsService: CustomerTransactionsService,
    private _TransactionsService: TransactionsService
  ) {}
  ngOnInit(): void {
    this.getAllCustromersData();
    this.getAllTransactionsData();
    this.loadCustomerTransactions();
  }
  getAllCustromersData(): void {
    this._CustomerTransactionsService.getAllCustromersData().subscribe({
      next: (response) => {
        this.AllCustomers = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getAllTransactionsData(): void {
    this._TransactionsService.getAllTransactionsData().subscribe({
      next: (response) => {
        this.AllTransactions = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  loadCustomerTransactions(): void {
    if (this.AllCustomers && this.AllTransactions) {
      this.customerTransactions = this.AllTransactions.map((transaction) => {
        const customer = this.AllCustomers.find((customer) => {
          return transaction.customer_id.toString() === customer.id.toString();
        });
        return {
          transaction,
          customer,
        } as ICustomerTransaction;
      });
    }
  }
  clearSort(): void {
    this.TransctionsTable.reset();
    this.TransctionsTable.sort({ field: 'transaction.id' });
    this.TransctionsTable.reset();
  }
}
