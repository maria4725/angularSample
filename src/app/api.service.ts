import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  origin: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    url = this.bindorigin(url);
    // return url;
    return this.http.get(url);
  }

  delete(url: string): Observable<any> {
    url = this.bindorigin(url);
    // return url;
    return this.http.delete(url);
  }

  post(url: string, data: any): Observable<any> {
    url = this.bindorigin(url);
    // return url;
    return this.http.post(url, data);
  }

  put(url: string, data: any): Observable<any> {
    url = this.bindorigin(url);
    // return url;
    return this.http.put(url, data);
  }

  bindorigin(url: string): string {
    return this.origin + url;
  }
}

