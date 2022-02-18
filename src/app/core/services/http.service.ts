import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // base URL stored in environment.ts
  baseURL = environment.url;
  constructor(
    private http: HttpClient // Inject httpClient
  ) { }

  // Post Request path , header <option>, data <option>
  postReq(path: string, data?, header?): Observable<any> {
    let obs: Observable<any>;
    obs = this.http.post(`${this.baseURL}${path}`, data, header)
    return obs;
  }

  // Get Request path , header <option>
  getReq(path: string, header?): Observable<any> {
    return this.http.get(`${this.baseURL}${path}`, header);
  }

  // Put Request path , header <option>, data <option>
  putReq(path: string, header?, data?): Observable<any> {
    return this.http.put(`${this.baseURL}${path}`, header, data);
  }

  // Delete Request path , header <option>, data <option>
  deleteReq(path: string, data?): Observable<any> {
    return this.http.delete(`${this.baseURL}${path}`, data);
  }
}
