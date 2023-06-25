import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
declare var $: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{
  private observable: Observable<boolean>;
  private subscription: Subscription | null = null;

  public showPopup: boolean = false;

  constructor() {
    this.observable = new Observable(observer =>{
      const timeout = setTimeout(()=>{
        observer.next(true);
      }, 5000)

      return{
        unsubscribe() {
          clearTimeout(timeout);
        }
      }

    })
  }
  ngOnInit() {
    console.log('init');
    console.log($('#accordion'));
    this.subscription = this.observable.subscribe(param =>{
      this.showPopup = param;
    })

    $('#accordion').accordion();
    $('.btn').addClass(' hvr-grow');

    $('.product-image').magnificPopup({
      type: 'image'
    });

  }
  ngOnDestroy() {
    console.log('Destroy');
    this.subscription?.unsubscribe();
  }
}
