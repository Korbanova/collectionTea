import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {RouterModule} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./product/product.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    SharedModule,
    CurrencyPipe,
    CommonModule,
    RouterModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
