import {Component} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  wordSearch = new FormControl('');

  constructor(private productService: ProductService,
              private router: Router) {
  }

  reset() {
    this.wordSearch.setValue('');
    this.productService.searchProductAll();
  }

  searchProduct() {
    this.productService.wordSearch = this.wordSearch.value;
    if (this.productService.wordSearch !== null) {
      this.productService.searchProduct();
    } else {
      this.productService.searchProductAll();
    }
    if (this.router.url !== '/catalog') {
      this.router.navigate(['/catalog'])
    }
  }


}
