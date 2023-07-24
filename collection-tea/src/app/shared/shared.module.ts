import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
