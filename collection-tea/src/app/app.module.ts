import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MainComponent } from './components/pages/main/main.component';
import { HeaderComponent } from './components/common/header/header.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { OrderComponent } from './components/pages/order/order.component';
import {ProductService} from "./services/product.service";
import {HttpClientModule} from "@angular/common/http";
import { ProductComponent } from './components/pages/product/product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CurrencyPipe} from "@angular/common";
import {registerLocaleData} from "@angular/common"
import localeFr from "@angular/common/locales/fr"
registerLocaleData(localeFr, 'fr')

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    CatalogComponent,
    OrderComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyPipe
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
