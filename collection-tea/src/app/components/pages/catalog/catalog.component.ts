import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {ProductType} from "../../../types/product.type";
import {tap} from "rxjs";
import {HttpParams} from "@angular/common/http";

declare var $: any;

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, AfterViewChecked {
  productsTea: ProductType[] = []
  loading: boolean = false;
  isDataSearch: boolean = false;

  constructor(
    public productService: ProductService) {
  }

  fillingArrayProducts(params?: HttpParams) {
    this.productService.getProducts(params)
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.productsTea = data;
          },
          error: ((error) => {
            console.log(error)
          })
        }
      )
  }

  getDataSearch(condition: boolean) {
    if (condition) {
      let params = new HttpParams().set('search', this.productService.wordSearch as string);
      this.fillingArrayProducts(params);
    } else {
      this.fillingArrayProducts();
    }
  }

  ngOnInit() {
    this.loading = true;
    this.getDataSearch(!!this.productService.wordSearch)

    this.productService.searchSubject.subscribe({
        next: (param) => {
          this.loading = true;
          this.getDataSearch(param);
          this.isDataSearch = param;
        }
      }
    )
  }

  ngAfterViewChecked() {
    $('.product-image').magnificPopup({
      type: 'image'
    });
  }

}
