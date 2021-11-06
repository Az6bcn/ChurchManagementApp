import { FinancialBreakdownInPercentage } from './financial-breakdown-in-percentage';
import { FinanceProgressInfo } from './finance-progress-info';
import { AttendanceChartSummary } from './attendance-chart-summary';
import { AttendanceReponseDto } from './attendance-response-dto';
import { FinancialAnalyticsChart } from './financial-analytics-chart';

export interface Dashboard {
  members: number;
  tithe: FinanceProgressInfo;
  thanksgiving: FinanceProgressInfo;
  expenses: FinanceProgressInfo;
  offering: FinanceProgressInfo;
  specialThanksgiving: FinanceProgressInfo,
  midWeekServiceOffering: FinanceProgressInfo,
  newComers: number;
  currentMonthAttendance: Array<{ date: string, value: AttendanceReponseDto }>
  lastYearAttendance: Array<{ date: string, value: AttendanceReponseDto }>
  currentYearAttendance: Array<{ date: string, value: AttendanceReponseDto }>
  monthAttendanceSummary: Array<AttendanceChartSummary>;
  expensesFinancialAnalytics: Array<FinancialAnalyticsChart>;
  incomeFinancialAnalytics: Array<FinancialAnalyticsChart>;
  financialBreakdownInPercentage: FinancialBreakdownInPercentage;
  currencyCode: string
}
