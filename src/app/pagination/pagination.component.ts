import { Component, OnInit } from '@angular/core';

import { TabviewService } from '../others/tabview.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  comments = [];
  initial = 0;
  pageLimit = 10;
  end = this.initial + this.pageLimit;
  page = 1;

  constructor(
    config: NgbPaginationConfig,
    private tab: TabviewService,
    private api: ApiService,
    private http: HttpClient
  ) {
    // customize default values of paginations used by this component tree
    config.size = 'sm';
    config.boundaryLinks = true;
    this.loaddata();
  }
  loaddata(): void {
    console.log(this.api.get('comments'));
    // this.http
    //   .get('https://jsonplaceholder.typicode.com/comments')
    this.api.get('comments')
      .subscribe((data: any[]) => {
        console.log(data);
        this.comments = data;
      });
  }
  ngOnInit(): void {
    console.log('ngoninit');
    // this.comments = this.tab.comments;
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewinit');
  }

  view(index: number): void {
    console.log('view EMployee : ' + index);
    this.tab.selectedtab = index;
  }
  setpage(page: number) {
    this.page = page;
    this.initial = (page - 1) * this.pageLimit;
    this.end = this.initial + this.pageLimit;
  }

  changePageLimit(): void {
    this.pageLimit = 25;
    this.setpage(1);
  }
}
