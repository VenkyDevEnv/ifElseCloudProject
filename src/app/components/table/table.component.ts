import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  payments: any[] = [];
  transactionsData: any;
  searchText = '';
  rowsToDisplay: number = 5;
  searchTerm: string = '';
  filteredItems: any[] = [];

  constructor(private service: TransactionsService) {}

  ngOnInit() {
    this.onTransactions();
  }

  onTransactions() {
    this.service.getTransactions().subscribe((res) => {
      this.payments = Object.values(res.transactions);
      this.filteredItems = this.payments;
    });
  }

  search(): void {
    // Filter items based on the search term
    // Update a variable to hold the filtered items
    this.filteredItems = this.payments.filter(
      (item: any) =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) |
        item.status.toLowerCase().includes(this.searchTerm.toLowerCase()) |
        item.type.toLowerCase().includes(this.searchTerm.toLowerCase())
      // item.time.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log(this.filteredItems);
  }
}
