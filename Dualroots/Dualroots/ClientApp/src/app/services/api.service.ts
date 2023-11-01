import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
Injectable()
export class ApiService {
  private httpHeaders: any;
  private url: string="https://localhost:7102/api/"
  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    this.url = "https://localhost:7102/api/";
  }

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get<T>(this.url + `${path}`, { headers: this.httpHeaders, params })
      .pipe(catchError(this.handleError));
  }

  post(path: string, body: object = {}, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.post(this.url + `${path}`, JSON.stringify(body), { headers: this.httpHeaders, params })
      .pipe(catchError(this.handleError));
  }

  put(path: string, body: object = {}, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.put(this.url + `${path}`, JSON.stringify(body), { headers: this.httpHeaders, params })
      .pipe(catchError(this.handleError));
  }

  delete(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.delete(this.url + `${path}`, { headers: this.httpHeaders, params })
      .pipe(catchError(this.handleError));
  }

  getFile(path: string, httpParams: HttpParams = new HttpParams()): Observable<HttpResponse<Blob>> {
    return this.httpClient.get(this.url + `${path}`, { observe: 'response', responseType: 'blob', headers: this.httpHeaders, params: httpParams });
  }

  postFile(path: string, body: object, httpParams: HttpParams = new HttpParams()) {
    return this.httpClient.post(this.url + `${path}`, body, { observe: 'response', headers: {}, params: httpParams }).pipe(catchError(this.handleError));
  }

  private handleError = (error: any) => {
    return throwError(error.error);
  }
}
