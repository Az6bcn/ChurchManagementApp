import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from '../models/api-response';
import { Dashboard } from '../models/dashboard';
import { Endpoints } from '../models/endpoints';
import { Member } from '../models/member';
import { MemberRequestDto } from '../models/member-add';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  constructor(private http: HttpClient) { }

  addMember(data: MemberRequestDto): Observable<ApiResponse<any>> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Api-Key': 'bb83825e-b3cd-4800-a489-baf7c19a3268'
    });
    return this.http.post<ApiResponse<any>>(Endpoints.addMember, data, { headers: httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  getMembers(): Observable<ApiResponse<Member>> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Api-Key': 'bb83825e-b3cd-4800-a489-baf7c19a3268'
    });
    return this.http.get<ApiResponse<Member>>(Endpoints.getMembers, { headers: httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  getWorkerMembers(): Observable<ApiResponse<any>> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Api-Key': 'bb83825e-b3cd-4800-a489-baf7c19a3268'
    });
    return this.http.get<ApiResponse<any>>(Endpoints.getWorkerMembers, { headers: httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  deleteMember(memberId: number): Observable<ApiResponse<any>>{
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Api-Key': 'bb83825e-b3cd-4800-a489-baf7c19a3268'
    });
    return this.http.delete<ApiResponse<any>>(
      `${Endpoints.deleteMember}/${memberId}`, { headers: httpHeaders })
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
