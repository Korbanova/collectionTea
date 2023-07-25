import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {PopupComponent} from "../../../shared/components/popup/popup.component";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  private observable: Observable<boolean>;
  private subscription: Subscription | null = null;

  public showPopup: boolean = false;

  panels = [
    {
      title: 'Собираете ли вы подарочные боксы?',
      body: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!'
    },
    {
      title: 'Сколько у вас разновидностей чая?',
      body: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!'
    },
    {
      title: 'В какой срок осуществляется доставка?',
      body: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!'
    },
    {
      title: 'У вас обновляется ассортимент?',
      body: 'Да, у нас есть такая услуга.'
    },
    {
      title: 'Какого объема у вас пачки чая?',
      body: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!'
    },
  ];

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

  ngAfterViewInit() {
    this.subscription = this.observable.subscribe((param: boolean) => {
      this.popupComponent.open();
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
