import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
 
 now = new Date();
 htmlsnipet= "<script>alert ('hi');</script>"
  constructor() { }

  ngOnInit(): void {
  }

}
