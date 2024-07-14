import { Pipe, PipeTransform } from '@angular/core';
import { ITransactionsData } from '../../shared/interfaces/itransactions-data';

@Pipe({
  name: 'transactionAmount',
  standalone: true,
})
export class TransactionAmountPipe implements PipeTransform {
  transform(
    AllTransactions: ITransactionsData[],
    text: string
  ): ITransactionsData[] {
    return AllTransactions.filter((ele) =>
      ele.amount.toString().includes(text.toString())
    );
  }
}
