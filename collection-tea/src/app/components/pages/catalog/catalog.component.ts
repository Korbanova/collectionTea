import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product.type";
import {RouterModule} from '@angular/router';
import {tap} from "rxjs";

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  productsTea: ProductType[] = []

  constructor(
    private productService: ProductService,
    private http: HttpClient) {
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        {
          next: (data) => {
            this.productsTea = data;
              console.log(this.productsTea )
          },
          error: ((error) => {
            console.log(error)
          })
        }
      );
  }
}
