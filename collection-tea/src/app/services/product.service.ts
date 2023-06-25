import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";
import {Observable, Subject, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {OrderRequestType} from "../types/order-request.type";
import {OrderResponseType} from "../types/order-response.type";
import {Router} from "@angular/router";

@Injectable()
export class ProductService {
  public searchSubject: Subject<boolean> = new Subject<boolean>();
  private isSearch = false;
  public wordSearch: string | null = '';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  searchProduct() {
    this.isSearch = true;
    this.searchSubject.next(this.isSearch);
  }

  searchProductAll() {
    this.isSearch = false;
    this.searchSubject.next(this.isSearch);
  }

  getProducts(params?:HttpParams): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.site/tea', {params: params});
  }

  getProductSearch(): Observable<ProductType[]> {
    // return this.http.get<ProductType[]>(`https://testologia.site/tea?search=${this.wordSearch}`)
    let params = new HttpParams().set('search', this.wordSearch as string);
    return this.http.get<ProductType[]>(`https://testologia.site/tea?search`, { params: params })
      .pipe(
        tap((data) => {
        })
      )
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`)
      .pipe(
        tap((data) => {
        })
      )
  }

  createOrder(data: OrderRequestType): Observable<OrderResponseType> {
    return this.http.post<OrderResponseType>('https://testologia.site/order-tea', data);

  }
}
