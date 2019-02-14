import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: "<app-product-list></app-product-list>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'product-management';
}
