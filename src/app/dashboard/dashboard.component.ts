import { FinancialAnalyticsChart } from './../models/financial-analytics-chart';
import { AttendancesChart } from './../models/attendances-chart';
import { AttendanceReponseDto } from './../models/attendance-response-dto';
import { AttendanceChartSummary } from './../models/attendance-chart-summary';
import { Dashboard } from './../models/dashboard';
import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { DashboardSharedService } from '../services/dashboard-shared.service';
import { AttendanceBarChart } from '../models/attendance-bar-chart-summary';
import { FinanceProgressInfo } from '../models/finance-progress-info';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardData: Dashboard;
  offeringThanksgivingTitheProgressInfo: Array<FinanceProgressInfo>;
  expensesSpecialThanksgivingMidweekOfferingProgreeInfo: Array<FinanceProgressInfo>;
  financialAnalyticsData: { innerLine: number[]; outerLine: FinancialAnalyticsChart[] };

  constructor(
    private _dashboardService: DashboardService,
    private _dashboardSharedService: DashboardSharedService) { }

  ngOnInit(): void {
    this._dashboardService.getDashboardData()
      .subscribe(response => {
        this.dashboardData = response.result
        console.log('dashboar', this.dashboardData);

        this._dashboardSharedService.cacheAttendanceSummaryData(this.dashboardData.monthAttendanceSummary);

        this._dashboardSharedService.cacheAttendanceChartData(this.mapAttendanceChartData(this.dashboardData))

        this._dashboardSharedService.cacheAttendanceBarChartData(this.mapAttendanceBarChartData(this.dashboardData));

        this.offeringThanksgivingTitheProgressInfo = [
          this.dashboardData.tithe,
          this.dashboardData.thanksgiving,
          this.dashboardData.offering
        ];

        this.expensesSpecialThanksgivingMidweekOfferingProgreeInfo = [
          this.dashboardData.expenses,
          this.dashboardData.specialThanksgiving,
          this.dashboardData.midWeekServiceOffering
        ];

        //   this._dashboardSharedService.cacheIncomeFinancialAnalytics(
        //     this.generateOutlineLineData(this.dashboardData.incomeFinancialAnalytics));
        //   this._dashboardSharedService.cacheExpensesFinancialAnalytics(
        //     this.dashboardData.expensesFinancialAnalytics.map(x => x.value))
        // })

        this.financialAnalyticsData = {
          innerLine: this.dashboardData.expensesFinancialAnalytics.map(x => x.value),
          outerLine: this.dashboardData.incomeFinancialAnalytics
        }

        this._dashboardSharedService.cacheTenantCurrency(this.dashboardData.currencyCode)
        console.log('fdata', this.financialAnalyticsData);
      })
  }

  private mapAttendanceChartData(data: Dashboard): AttendancesChart {
    const uniqueLabels = Object.keys(data.currentYearAttendance);

    let values = Object.values(data.currentYearAttendance);
    const currentYearMenLines = values.map(x => x['men']);
    const currentYearWomenLines = values.map(x => x['women']);
    const currentYearChildrenLines = values.map(x => x['children']);

    const combinedLineData = [
      currentYearMenLines,
      currentYearWomenLines,
      currentYearChildrenLines
    ];
    const labels = this.getDataLabels(uniqueLabels.length, uniqueLabels);

    return {
      chartLabel: labels,
      linesData: combinedLineData
    };
  }

  private getDataLabels(nPoints: number, labelsArray: string[]): string[] {
    const labelsArrayLength = labelsArray.length;
    const step = Math.round(nPoints / labelsArrayLength);

    return Array.from(Array(nPoints)).map((item, index) => {
      const dataIndex = Math.round(index / step);

      return index % step === 0 ? labelsArray[dataIndex] : '';
    });
  }

  private mapAttendanceBarChartData(data: Dashboard): AttendanceBarChart {
    const uniqueLabels = Object.keys(data.currentMonthAttendance);

    let values = Object.values(data.currentMonthAttendance);
    const currentYearMenLines = values.map(x => x['men']);
    const currentYearWomenLines = values.map(x => x['women']);
    const currentYearChildrenLines = values.map(x => x['children']);

    const combinedLineData = [
      currentYearMenLines,
      currentYearWomenLines,
      currentYearChildrenLines
    ];
    const labels = this.getDataLabels(uniqueLabels.length, uniqueLabels);

    return {
      chartLabel: labels,
      data: combinedLineData
    };
  }


}
