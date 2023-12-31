import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";
import {Subscription} from "rxjs";
import {OrderResponseType} from "../../../types/order-response.type";

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  chosenProduct: string = '';
  isResponse = {
    success: false,
    error: false,
  };
  subscriptionRouter: Subscription | null = null;
  subscriptionRequest: Subscription | null = null;

  orderForm = new FormGroup({
    product: new FormControl(this.chosenProduct, [Validators.required]),
    nameUser: new FormControl('', [Validators.required, Validators.pattern('^[А-Яа-я]+$')]),
    lastNameUser: new FormControl('', [Validators.required, Validators.pattern('^[А-Яа-я]+$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[+]?[0-9]{11}$')]),
    country: new FormControl('', [Validators.required]),
    index: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.pattern('^[А-Яа-я0-9-\\/ ]+$')]),
    comments: new FormControl('')
  })

  constructor(private activatedRouter: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.subscriptionRouter = this.activatedRouter.queryParams.subscribe((param:Params) => {
      this.orderForm.patchValue({
        product: param['product']
      })
    })
  }

  createOrder(): void {
    if (this.orderForm.valid) {
      this.subscriptionRequest = this.productService.createOrder({
        name: this.nameUser?.value as string,
        last_name: this.lastNameUser?.value as string,
        phone: this.phone?.value as string,
        country: this.country?.value as string,
        zip: this.index?.value as string,
        product: this.product?.value as string,
        address: this.address?.value as string,
        comments: this.comments?.value as string
      })
        .subscribe(
          {
            next: (response: OrderResponseType) => {
              if (response.success === 1 && !response.message) {
                this.isResponse.success = true;
              } else {
                this.isResponse.error = true;
                setTimeout(() => {
                  this.isResponse.error = false;
                }, 3000)
              }
            },
            error: (error) => {
              console.log('error ' + error);
            }
          }
        )
    }
  }

  ngOnDestroy() {
    this.subscriptionRouter?.unsubscribe();
    this.subscriptionRequest?.unsubscribe();
  }

  get product(): AbstractControl | null {
    return this.orderForm.get('product')
  }

  get nameUser(): AbstractControl | null {
    return this.orderForm.get('nameUser')
  }

  get lastNameUser(): AbstractControl | null {
    return this.orderForm.get('lastNameUser')
  }

  get phone(): AbstractControl | null {
    return this.orderForm.get('phone')
  }

  get address(): AbstractControl | null {
    return this.orderForm.get('address')
  }

  get country(): AbstractControl | null {
    return this.orderForm.get('country')
  }

  get index(): AbstractControl | null {
    return this.orderForm.get('index')
  }

  get comments(): AbstractControl | null {
    return this.orderForm.get('comments')
  }

}
