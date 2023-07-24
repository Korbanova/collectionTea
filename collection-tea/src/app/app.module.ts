import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductService} from "./shared/services/product.service";
import {registerLocaleData} from "@angular/common"
import localeRu from "@angular/common/locales/ru";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {SharedModule} from "./shared/shared.module";
import { LayoutComponent } from './views/layout.component';
registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ProductService, {provide:LOCALE_ID, useValue: 'ru'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
