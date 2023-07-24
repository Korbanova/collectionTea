import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

declare var $: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  private observable: Observable<boolean>;
  private subscription: Subscription | null = null;

  public showPopup: boolean = false;

  constructor() {
    this.observable = new Observable<boolean>(observer => {
      const timeout = setTimeout(() => {
        observer.next(true);
      }, 5000)

      return {
        unsubscribe() {
          clearTimeout(timeout);
        }
      }

    })
  }

  ngOnInit() {
    this.subscription = this.observable.subscribe((param: boolean) => {
      this.showPopup = param;
    })

    $('#accordion').accordion();
    $('.btn').addClass(' hvr-grow');

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
