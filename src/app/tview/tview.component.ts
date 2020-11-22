import { Component, OnInit } from '@angular/core';
import { TabviewService } from '../others/tabview.service';
@Component({
  selector: 'app-tview',
  templateUrl: './tview.component.html',
  styleUrls: ['./tview.component.css']
})
export class TviewComponent implements OnInit {
  comments =
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }
  constructor(private tab:TabviewService) {}

  ngOnInit(): void {
    this.comments=this.tab.gettvalue();
  }
}
