import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css', './leftmenu.component.scss']
})
export class LeftmenuComponent implements OnInit {
  active = true;
  public uiBasicCollapsed = false;


  toggle() {
    this.active = !this.active;
  }
  ngOnInit(): void {
  }

}
