import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { BalanceService } from 'src/app/services/balance.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  chart: any;
  data: any;
  totalIncome: number = 0;
  totalExpense: number = 0;
  totalInvestment: number = 0;

  constructor(private service: BalanceService) {}

  ngOnInit(): void {
    this.buildColumnChart();
    this.getStatisticsValues();
  }

  getStatisticsValues() {
    this.service.getBalance().subscribe((res) => {
      this.data = res;
      this.totalIncome = this.data.money_statistics.total_income.value;
      this.totalExpense = this.data.money_statistics.total_expense.value;
      this.totalInvestment = this.data.money_statistics.total_investment.value;
    });
  }

  buildColumnChart() {
    const ctx = document.getElementById('columnChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Income',
            data: [
              50000, 60000, 120000, 80000, 150000, 100000, 95000, 110000,
              120000, 130000, 150000, 100000,
            ],
            backgroundColor: '#91A9A9',
            borderColor: '#91A9A9',
          },
          {
            label: 'Investment',
            data: [
              30000, 35000, 70000, 22000, 55000, 28000, 90000, 100000, 35000,
              38000, 50000, 42000,
            ],
            backgroundColor: '#B7BACD',
            borderColor: '#B7BACD',
          },
          {
            label: 'Expense',
            data: [
              16000, 79000, 50000, 28000, 10000, 10000, 45000, 50000, 95000,
              42000, 45000, 100000,
            ],
            backgroundColor: '#6A7087',
            borderColor: '#6A7087',
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
            position: 'bottom',
          },

          y: {
            grid: {
              tickBorderDash: [5, 5],
            },
            ticks: {
              callback: function (label: any, index, labels) {
                return label / 1000 + 'k';
              },
            },
          },
        },
      },
    });
  }
}
