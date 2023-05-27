import {Component, HostListener, OnInit} from '@angular/core';
import { Router} from "@angular/router";
import {HttpClient} from '@angular/common/http';
import {toInt} from "ngx-bootstrap/chronos/utils/type-checks";
import {range} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  num: number[];
  constructor(private router: Router,
              private http: HttpClient) {
    this.num = [0, 0, 0, 0, 0, 0];
  }

  ngOnInit(): void {
    let myFunc = (numb: any) => Number(numb);
    this.http.get('assets/json/data.json', {
      responseType: 'text'
    })
      .subscribe(data => {
        let counter = JSON.parse(data);
        let counterNumber = counter['count'];
        let newNum = (Array.from(String(counterNumber), myFunc));
        for(let i = 0; i < newNum.length; i++){
          this.num[this.num.length - newNum.length + i] = newNum[i];
        }
      });
    }

  redirect(s: string) {
    // @ts-ignore
    this.router.navigate([s]);
  }
}
