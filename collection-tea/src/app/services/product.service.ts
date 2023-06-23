import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductService {
  // private products: ProductType[] = [];

  constructor(private http: HttpClient) {
  }

  getProducts():Observable<ProductType[]>{
    return this.http.get<ProductType[]>('https://testologia.site/tea')
      .pipe(
        tap(()=>{
          console.log('dddd')
        })
      )
  }

  getProduct(id:number):Observable<ProductType>{
    return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`)
      .pipe(
        tap((data)=>{
          console.log('getProduct')
          console.log(data)
        })
      )
  }
}
