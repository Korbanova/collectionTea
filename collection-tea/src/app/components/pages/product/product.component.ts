import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: ProductType;

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
    this.activatedRoute.params.subscribe((params) => {
        if (params['id']) {
          this.productService.getProduct(+params['id'])
            .subscribe(
              {
                next: (data => {
                  console.log(data)
                  this.product = data;
                }),
                error: (error => {
                  this.router.navigate(['/'])
                })

              })

        }

      });
  }
}
