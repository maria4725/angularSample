import { Component, OnInit } from '@angular/core';
import { BounceBall } from "./Ball";

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const GRAVITY = 1;


const COLOR = "deepskyblue";

    BounceBall({
      color: COLOR,
      gravity: GRAVITY
    });
  }

}
