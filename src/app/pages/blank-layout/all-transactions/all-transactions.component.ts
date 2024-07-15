import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { CustomerTransactionsService } from '../../../shared/services/customers.service';
import { TransactionsService } from '../../../shared/services/transactions.service';
import { ICustomerData } from '../../../shared/interfaces/icustomer-data';
import { ITransactionsData } from '../../../shared/interfaces/itransactions-data';
import { ICustomerTransaction } from '../../../shared/interfaces/icustomertransactions';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-all-transactions',
  standalone: true,
  imports: [
    TableModule,
    InputTextModule,
    CommonModule,
    DatePipe,
    FormsModule,
    NgxChartsModule,
  ],
  templateUrl: './all-transactions.component.html',
  styleUrl: './all-transactions.component.scss',
})
export class AllTransactionsComponent implements OnInit {
  @ViewChild('TransctionsTable') TransctionsTable!: Table;
  searchValue: string = '';
  isSorted: boolean | null = null;
  AllCustomers!: ICustomerData[];
  AllTransactions!: ITransactionsData[];
  customerTransactions!: ICustomerTransaction[];
  currentCustomer: any = [];
  isLightBoxOpen: boolean = false;

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
        this.loadCustomerTransactions();
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
        this.loadCustomerTransactions();
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
    this.searchValue = '';
    this.loadCustomerTransactions();
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  HandleCustomerData(customer: ICustomerData): void {
    console.log(customer);
    let AllTransactions = [...this.AllTransactions];
    this.currentCustomer = [];
    AllTransactions.forEach((ele) => {
      if (ele.customer_id === customer.id) {
        this.currentCustomer.push({
          name: ele.date,
          value: ele.amount,
        });
      }
    });
  }
  toggleLightBox(): void {
    this.isLightBoxOpen = !this.isLightBoxOpen;
  }
  StopProp(e: Event) {
    e.stopPropagation();
  }
  view: [number, number] = [700, 400];
}
