import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  url = '';
  constructor(
    private http: HttpClient // Inject httpClient
  ) { }

  // Post Request path , header <option>, data <option>
  postReq(path: string, data?, header?): Observable<any> {

    let obs: Observable<any>;
    obs = this.http.post(`${this.baseURL}${path}?access_key=${environment.access_key}`, data, header)
    return obs;
  }

  // Get Request path , header <option>
  getReq(path: string, header?): Observable<any> {
   
    let obs: Observable<any>;
    obs = this.http.get(`${this.baseURL}${path}?access_key=${environment.access_key}`, header);
    return obs;
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
