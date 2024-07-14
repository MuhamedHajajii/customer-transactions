import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionAmountPipe } from '../../../core/pipes/transaction-amount.pipe';
import { TransactionsnameandidPipe } from '../../../core/pipes/transactionsnameandid.pipe';
import { ICustomerData } from '../../../shared/interfaces/icustomer-data';
import { ITransactionsData } from '../../../shared/interfaces/itransactions-data';
import { CustomerTransactionsService } from '../../../shared/services/customers.service';
import { TransactionsService } from '../../../shared/services/transactions.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-all-customers',
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe,
    FormsModule,
    TransactionsnameandidPipe,
    TransactionAmountPipe,
    NgxChartsModule,
  ],
  templateUrl: './all-customers.component.html',
  styleUrl: './all-customers.component.scss',
})
export class AllCustomersComponent implements OnInit {
  AllCustomers!: ICustomerData[];
  AllTransactions!: ITransactionsData[];
  SearchFeildNameAndId: string = '';
  SearchFeildAmount: string = '';
  currentCustomer: any = [];
  isLightBoxOpen: boolean = false;
  constructor(
    private _CustomerTransactionsService: CustomerTransactionsService,
    private _TransactionsService: TransactionsService
  ) {}
  ngOnInit(): void {
    this.getAllCustromersData();
    this.getAllTransactionsData();
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
  HandleCustomerData(customer: ICustomerData): void {
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
