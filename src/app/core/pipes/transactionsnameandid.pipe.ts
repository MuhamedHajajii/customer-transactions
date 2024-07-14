import { Pipe, PipeTransform } from '@angular/core';
import { ICustomerData } from '../../shared/interfaces/icustomer-data';

@Pipe({
  name: 'transactionsnameandid',
  standalone: true,
})
export class TransactionsnameandidPipe implements PipeTransform {
  transform(AllCustomers: ICustomerData[], text: string): ICustomerData[] {
    if (isNaN(+text)) {
      return AllCustomers.filter((ele) =>
        ele.name.toLowerCase().includes(text.toLocaleLowerCase())
      );
    } else {
      return AllCustomers.filter((ele) =>
        ele.id.toString().toLowerCase().includes(text.toLocaleLowerCase())
      );
    }
  }
}
