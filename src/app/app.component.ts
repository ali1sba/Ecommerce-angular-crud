import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'frontEnd';
  
  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label:'Products',
              icon:'pi pi-fw pi-file',
              routerLink: "products"
          },
          {
              label:'Add',
              icon:'pi pi-fw pi-pencil',
              routerLink: "add"
              
          },
          

          {
              label:'Quit',
              icon:'pi pi-fw pi-power-off'
          }
      ];
  }

}
