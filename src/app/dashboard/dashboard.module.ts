import { CountryOrdersMapService } from './../pages/e-commerce/country-orders/map/country-orders-map.service';
import { CountryOrderService } from './../@core/mock/country-order.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule } from '@nebular/theme';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ChartModule } from 'angular2-chartjs';
import { ChartPanelHeaderComponent } from '../pages/e-commerce/charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from '../pages/e-commerce/charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ECommerceChartsPanelComponent } from '../pages/e-commerce/charts-panel/charts-panel.component';
import { OrdersChartComponent } from '../pages/e-commerce/charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from '../pages/e-commerce/charts-panel/charts/profit-chart.component';
import { CountryOrdersChartComponent } from '../pages/e-commerce/country-orders/chart/country-orders-chart.component';
import { CountryOrdersComponent } from '../pages/e-commerce/country-orders/country-orders.component';
import { CountryOrdersMapComponent } from '../pages/e-commerce/country-orders/map/country-orders-map.component';
import { ECommerceComponent } from '../pages/e-commerce/e-commerce.component';
import { EarningCardBackComponent } from '../pages/e-commerce/earning-card/back-side/earning-card-back.component';
import { EarningPieChartComponent } from '../pages/e-commerce/earning-card/back-side/earning-pie-chart.component';
import { EarningCardComponent } from '../pages/e-commerce/earning-card/earning-card.component';
import { EarningCardFrontComponent } from '../pages/e-commerce/earning-card/front-side/earning-card-front.component';
import { EarningLiveUpdateChartComponent } from '../pages/e-commerce/earning-card/front-side/earning-live-update-chart.component';
import { ECommerceLegendChartComponent } from '../pages/e-commerce/legend-chart/legend-chart.component';
import { StatsAreaChartComponent } from '../pages/e-commerce/profit-card/back-side/stats-area-chart.component';
import { StatsCardBackComponent } from '../pages/e-commerce/profit-card/back-side/stats-card-back.component';
import { StatsBarAnimationChartComponent } from '../pages/e-commerce/profit-card/front-side/stats-bar-animation-chart.component';
import { StatsCardFrontComponent } from '../pages/e-commerce/profit-card/front-side/stats-card-front.component';
import { ProfitCardComponent } from '../pages/e-commerce/profit-card/profit-card.component';
import { ECommerceProgressSectionComponent } from '../pages/e-commerce/progress-section/progress-section.component';
import { SlideOutComponent } from '../pages/e-commerce/slide-out/slide-out.component';
import { TrafficBackCardComponent } from '../pages/e-commerce/traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarChartComponent } from '../pages/e-commerce/traffic-reveal-card/back-side/traffic-bar-chart.component';
import { TrafficBarComponent } from '../pages/e-commerce/traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficFrontCardComponent } from '../pages/e-commerce/traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficCardsHeaderComponent } from '../pages/e-commerce/traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { TrafficRevealCardComponent } from '../pages/e-commerce/traffic-reveal-card/traffic-reveal-card.component';
import { ECommerceUserActivityComponent } from '../pages/e-commerce/user-activity/user-activity.component';
import { ECommerceVisitorsAnalyticsChartComponent } from '../pages/e-commerce/visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import { ECommerceVisitorsAnalyticsComponent } from '../pages/e-commerce/visitors-analytics/visitors-analytics.component';
import { ECommerceVisitorsStatisticsComponent } from '../pages/e-commerce/visitors-analytics/visitors-statistics/visitors-statistics.component';
import { FeaturesModule } from '../features/features.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ECommerceComponent,
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    ProfitCardComponent,
    ECommerceChartsPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    StatsCardBackComponent,
    TrafficRevealCardComponent,
    TrafficBarChartComponent,
    TrafficFrontCardComponent,
    TrafficBackCardComponent,
    TrafficBarComponent,
    TrafficCardsHeaderComponent,
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    CountryOrdersChartComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    ECommerceUserActivityComponent,
    ECommerceProgressSectionComponent,
    SlideOutComponent,
    EarningCardComponent,
    EarningCardFrontComponent,
    EarningCardBackComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbMenuModule,
    ThemeModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    FeaturesModule
  ],
  providers: [
    CountryOrderService,
    CountryOrdersMapService
  ]
})
export class DashboardModule { }
