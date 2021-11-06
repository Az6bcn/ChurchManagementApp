import { AttendanceBarChart } from './../models/attendance-bar-chart-summary';
import { AttendancesChart } from './../models/attendances-chart';
import { AttendanceChartSummary } from './../models/attendance-chart-summary';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { FinancialAnalyticsChart } from '../models/financial-analytics-chart';

@Injectable({
  providedIn: 'root'
})
export class DashboardSharedService {

  private attendanceSummaryData = new BehaviorSubject<Array<AttendanceChartSummary>>(void 0);
  private attendanceChartData = new BehaviorSubject<AttendancesChart>(void 0);
  private attendanceBarChartData = new BehaviorSubject<AttendanceBarChart>(void 0);
  private expensesFinancialAnalytics = new BehaviorSubject<Array<number>>(void 0);
  private incomeFinancialAnalytics = new BehaviorSubject<Array<FinancialAnalyticsChart>>(void 0);
  private tenantCurrencyCode = new BehaviorSubject<string>(void 0);
  constructor() { }

  cacheAttendanceSummaryData(value: Array<AttendanceChartSummary>) {
    this.attendanceSummaryData.next(value);
  }

  cacheExpensesFinancialAnalytics(value: Array<number>) {
    this.expensesFinancialAnalytics.next(value);
  }

  cacheIncomeFinancialAnalytics(value: Array<FinancialAnalyticsChart>) {
    this.incomeFinancialAnalytics.next(value);
  }

  cacheAttendanceChartData(value: AttendancesChart) {
    this.attendanceChartData.next(value);
  }

  cacheAttendanceBarChartData(value) {
    this.attendanceBarChartData.next(value);
  }

  cacheTenantCurrency(currencyCode: string) {
    this.tenantCurrencyCode.next(currencyCode);
  }

  getAttendanceSummaryData(): Observable<Array<AttendanceChartSummary>> {
    return this.attendanceSummaryData.asObservable();
  }

  getAttendanceChartData(): Observable<AttendancesChart> {
    return this.attendanceChartData.asObservable();
  }

  getAttendanceBarChartData(): Observable<AttendanceBarChart> {
    return this.attendanceBarChartData.asObservable();
  }

  getIncomeFinancialAnalytics(): Observable<Array<FinancialAnalyticsChart>> {
    return this.incomeFinancialAnalytics.asObservable();
  }

  getExpensesFinancialAnalytics(): Observable<Array<number>> {
    return this.expensesFinancialAnalytics.asObservable();
  }

  getTenantCurrencyCode(): Observable<string> {
    return this.tenantCurrencyCode.asObservable();
  }
}
