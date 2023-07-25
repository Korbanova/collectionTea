import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {MainComponent} from "./main/main.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse, NgbAccordionDirective, NgbAccordionHeader, NgbAccordionItem,
} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    NgbAccordionBody,
    NgbAccordionButton,
    NgbAccordionCollapse,
    NgbAccordionDirective,
    NgbAccordionHeader,
    NgbAccordionItem,

    CommonModule,
    RouterModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {
}
