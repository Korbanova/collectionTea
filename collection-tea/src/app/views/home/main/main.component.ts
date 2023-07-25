import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {PopupComponent} from "../../../shared/components/popup/popup.component";

declare var $: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild(PopupComponent)
  private popupComponent!:PopupComponent;

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
    // this.subscription = this.observable.subscribe((param: boolean) => {
    //   this.showPopup = param;
    // })

    $('#accordion').accordion();
    $('.btn').addClass(' hvr-grow');

  }
  ngAfterViewInit() {
    this.subscription = this.observable.subscribe((param: boolean) => {
      this.popupComponent.open();
    })
    // this.popupComponent.open();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
   // this.popupComponent.closeModal();
  }

  // closePopup(): void {
  //   this.showPopup = false;
  // }
}
