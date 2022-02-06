import { HttpClient, HttpErrorResponse, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from '../models/api-response';
import { DepartmentRequestDto } from '../models/department-add';
import { Endpoints } from '../models/endpoints';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }

  addDepartment(data: DepartmentRequestDto): Observable<ApiResponse<any>> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Api-Key': 'bb83825e-b3cd-4800-a489-baf7c19a3268'
    });
    return this.http.post<ApiResponse<any>>(Endpoints.addDepartment, data, { headers: httpHeaders })
      .pipe(
        catchError(this.handleError)
      )

  }
  private handleError(error: HttpErrorResponse) {
    if (error.status == HttpStatusCode.BadRequest) {
      const _error = (error.error as unknown as ApiResponse<any>);
      return throwError(_error.errorMessage[0]);
    }

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
