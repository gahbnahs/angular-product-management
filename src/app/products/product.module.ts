import { NgModule } from '@angular/core';


import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail.component';

import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    
    ProductRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProductModule { }
