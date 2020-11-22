import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit(): void {}
  login(f: any) {
    console.log(f);
    this.api.post('comments', f.value).subscribe((data: any) => {
      console.log(data);
    });
    alert('hi');
  }
  key() {
    alert('keypress');
  }
}
