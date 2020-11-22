import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lc',
  templateUrl: './lc.component.html',
  styleUrls: ['./lc.component.css']
})
export class LcComponent implements OnInit, AfterViewInit {
  dummylist = [1,5,6,7,9,10]
  showme = true;

  constructor() {
    console.log('ngconstructor');
  }

  ngOnInit(): void {
    console.log('ngoninit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewinit');
  }
  showit() {
    this.showme = !this.showme;
  }

}
