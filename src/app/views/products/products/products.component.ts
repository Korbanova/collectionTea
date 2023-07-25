import {AfterViewChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";
import {Subscription, tap} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  productsTea: ProductType[] = []
  loading: boolean = false;
  isDataSearch: boolean = false;
  subProducts: Subscription | null = null;
  subSubject: Subscription | null = null;

  constructor(
    public productService: ProductService) {
  }

  fillingArrayProducts(params?: HttpParams): void {
    this.loading = true;
    this.subProducts = this.productService.getProducts(params)
      .subscribe(
        {
          next: (data: ProductType[]) => {
            this.productsTea = data;
            this.loading = false;
          },
          error: ((error) => {
            console.log(error);
            this.loading = false;
          })
        }
      )
  }

  getDataSearch(condition: boolean): void {
    if (condition) {
      let params = new HttpParams().set('search', this.productService.wordSearch as string);
      this.fillingArrayProducts(params);
    } else {
      this.fillingArrayProducts();
    }
  }

  ngOnInit() {
    this.getDataSearch(!!this.productService.wordSearch)

    this.subSubject = this.productService.searchSubject.subscribe({
        next: (param: boolean) => {
          this.getDataSearch(param);
          this.isDataSearch = param;
        }
      }
    )
  }

  ngOnDestroy() {
    this.subSubject?.unsubscribe();
    this.subProducts?.unsubscribe();
  }

}
