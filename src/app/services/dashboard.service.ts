import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dashboard } from '../models/dashboard';
import { catchError } from 'rxjs/operators';
import { Endpoints } from '../models/endpoints';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  getDashboardData(): Observable<ApiResponse<Dashboard>> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Api-Key': 'bb83825e-b3cd-4800-a489-baf7c19a3268'
    });
    return this.http.get<ApiResponse<Dashboard>>(Endpoints.getDashBoardDataUrl, { headers: httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
