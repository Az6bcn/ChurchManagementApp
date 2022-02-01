import { Component, Input, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';
import { OutlineData, VisitorsAnalyticsData } from '../../../@core/data/visitors-analytics';
import { forkJoin } from 'rxjs';
import { DashboardSharedService } from '../../../services/dashboard-shared.service';
import { FinancialAnalyticsChart } from '../../../models/financial-analytics-chart';


@Component({
  selector: 'ngx-ecommerce-visitors-analytics',
  styleUrls: ['./visitors-analytics.component.scss'],
  templateUrl: './visitors-analytics.component.html',
})
export class ECommerceVisitorsAnalyticsComponent implements OnDestroy {
  private alive = true;

  pieChartValue: number;
  chartLegend: {iconColor: string; title: string}[];
  @Input() financialAnalyticsData: { innerLine: number[]; outerLine: FinancialAnalyticsChart[]; };
  @Input() incomePercentage: number;
  @Input() totalExpenses: number;
  @Input() expensesPercentage: number;
  constructor(
    private themeService: NbThemeService,
    private visitorsAnalyticsChartService: VisitorsAnalyticsData,
    private dashboardSharedService: DashboardSharedService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.setLegendItems(theme.variables.visitorsLegend);
      });

    //this.pieChartValue = 85;

    // forkJoin(
    //   this.visitorsAnalyticsChartService.getInnerLineChartData(),
    //   this.visitorsAnalyticsChartService.getOutlineLineChartData(),
    //   //   [this.dashboardSharedService.getExpensesFinancialAnalytics(),
    //   //     this.dashboardSharedService.getIncomeFinancialAnalytics(),
    //   this.visitorsAnalyticsChartService.getPieChartData()//]
    // )
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(([innerLine, outerLine, pieChartValue]: [number[], OutlineData[], number]) => {
    //     //     console.log('numbers', innerLine);
    //     //     console.log('outer numbers', outerLine);
    //     this.financialAnalyticsData = {
    //       innerLine: innerLine,
    //       outerLine: outerLine,
    //     };

    //     console.log(this.financialAnalyticsData);
    //     this.pieChartValue = pieChartValue;
    //   });

    // this.dashboardSharedService.getExpensesFinancialAnalytics()
    //   .subscribe(x => console.log(x));
    // this.dashboardSharedService.getIncomeFinancialAnalytics()
    //   .subscribe(x => console.log(x))
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('nint', this.financialAnalyticsData);
  }

  setLegendItems(visitorsLegend): void {
    this.chartLegend = [
      {
        iconColor: visitorsLegend.firstIcon,
        title: 'Expenses',
      },
      {
        iconColor: visitorsLegend.secondIcon,
        title: 'Income',
      },
    ];
  }

  ngOnDestroy() {
    this.alive = false;
  }


}
