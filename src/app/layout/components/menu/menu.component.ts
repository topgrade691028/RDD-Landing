import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Hide() {
    let element = document.getElementById("sale");
    // @ts-ignore
    element.style.transition = '0.5s';
    // @ts-ignore
    element.style.opacity = '0';
    // @ts-ignore
    element.style.width = '0px';

    let text = document.getElementById('price');
    // @ts-ignore
    text.style.display = 'none';

    let text1 = document.getElementById('price-old');
    // @ts-ignore
    text1.style.display = 'none';

    let text2 = document.getElementById('price-text');
    // @ts-ignore
    text2.style.display = 'none';
  }
}
