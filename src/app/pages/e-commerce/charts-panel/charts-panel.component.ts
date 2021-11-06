import { AttendanceChartSummary } from './../../../models/attendance-chart-summary';
import { Component, OnDestroy, ViewChild } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { OrdersChartComponent } from './charts/orders-chart.component';
import { ProfitChartComponent } from './charts/profit-chart.component';
import { OrderProfitChartSummary, OrdersProfitChartData } from '../../../@core/data/orders-profit-chart';
import { AttendancesChart } from '../../../models/attendances-chart';
import { AttendanceBarChart } from '../../../models/attendance-bar-chart-summary';
import { DashboardSharedService } from '../../../services/dashboard-shared.service';

@Component({
  selector: 'ngx-ecommerce-charts',
  styleUrls: ['./charts-panel.component.scss'],
  templateUrl: './charts-panel.component.html',
})
export class ECommerceChartsPanelComponent implements OnDestroy {

  private alive = true;

  chartPanelSummary: AttendanceChartSummary[];
  period: string = 'week';
  attendancesChartData: AttendancesChart;
  attendancesBarChartData: AttendanceBarChart;

  @ViewChild('attendancesChart', { static: true }) attendancesChart: OrdersChartComponent;
  @ViewChild('attendancesBarChart', { static: true }) attendancesBarChart: ProfitChartComponent;

  constructor(
    private ordersProfitChartService: OrdersProfitChartData,
    private _dashboardSharedService: DashboardSharedService) {
    this._dashboardSharedService.getAttendanceSummaryData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((summary) => {
        this.chartPanelSummary = summary;
      });

    this.getAttendanceChartData();
    this.getAttendanceBarChartData();
    //this.getProfitChartData('year');

  }

  setPeriodAndGetChartData(value: string): void {
    if (this.period !== value) {
      this.period = value;
    }

    this.getAttendanceChartData();
    this.getAttendanceBarChartData();
  }

  changeTab(selectedTab) {
    if (selectedTab.tabTitle === 'Profit') {
      this.attendancesBarChart.resizeChart();
    } else {
      this.attendancesChart.resizeChart();
    }
  }

  getAttendanceChartData() {
    this._dashboardSharedService.getAttendanceChartData()
      .pipe(takeWhile(() => this.alive))
      .subscribe(attendanceChartData => {
        this.attendancesChartData = attendanceChartData;
      });
  }

  getAttendanceBarChartData() {
    this._dashboardSharedService.getAttendanceBarChartData()
      .pipe(takeWhile(() => this.alive))
      .subscribe(atendanceBarChartData => {
        this.attendancesBarChartData = atendanceBarChartData;
        console.log('barchart', atendanceBarChartData);
      });
  }

  // getOrdersChartData(period: string) {
  //   this.ordersProfitChartService.getOrdersChartData(period)
  //     .pipe(takeWhile(() => this.alive))
  //     .subscribe(ordersChartData => {
  //       this.attendancesChartData = ordersChartData;
  //     });
  // }

  // getProfitChartData(period: string) {
  //   this.ordersProfitChartService.getProfitChartData(period)
  //     .pipe(takeWhile(() => this.alive))
  //     .subscribe(profitChartData => {
  //       this.attendancesBarChartData = profitChartData;
  //       console.log('xxxxx', profitChartData)
  //     });
  // }

  ngOnDestroy() {
    this.alive = false;
  }
}
