import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class TabviewService {
comments = [];
  selectedtab = 0;
  constructor(private api:ApiService) { }
  gettvalue(): Observable<any> {
    // return this.comments[this.selectedtab];
    return this.api.get('comments/'+this.selectedtab);
  }
}
