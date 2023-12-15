import { coerceStringArray } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { BalanceService } from 'src/app/services/balance.service';

@Component({
  selector: 'app-static-column',
  templateUrl: './static-column.component.html',
  styleUrls: ['./static-column.component.css'],
})
export class StaticColumnComponent implements OnInit {
  constructor(private service: BalanceService) {}

  data: any;
  totalBalance: number = 0;
  monthlyPaymentLimit: number = 0;
  paymentDoneSoFar: number = 0;
  paymentPercentage: number = 0;

  ngOnInit() {
    this.onBalance();
  }

  onBalance() {
    this.service.getBalance().subscribe((res) => {
      ((val: any) => {
        this.data = res;
        this.totalBalance = this.data.balance.total_balance;
        this.monthlyPaymentLimit = this.data.balance.monthly_payment_limit;
        this.paymentDoneSoFar = this.data.balance.payment_done_so_far;
        this.paymentPercentage = this.data.balance.payment_done_percentage;
      })((error: any) => console.log(error));
    });
  }
}
