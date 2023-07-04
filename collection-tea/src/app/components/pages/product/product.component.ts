import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {ProductType} from "../../../types/product.type";
import {Subscription, switchMap, tap} from "rxjs";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  product: ProductType;
  subscriptionRouter: Subscription | null = null;
  isError: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit() {
    this.subscriptionRouter = this.activatedRoute.params.pipe(
      switchMap((param: Params) => this.productService.getProduct(+param['id'])),
    )
      .subscribe(
        {
          next: ((data: ProductType) => {
            if (data) {
              this.product = data;
              this.isError = false;
            } else {
              //alert('Такого товара не существует');
              this.isError = true;
            }

          }),
          error: (error => {
            this.router.navigate(['/'])
          })
        }
      );
  }

  ngOnDestroy() {
    this.subscriptionRouter?.unsubscribe();
  }

}
