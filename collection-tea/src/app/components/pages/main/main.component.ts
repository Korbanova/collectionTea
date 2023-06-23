import {Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  ngOnInit() {
    console.log('init');
    console.log($('#accordion'));
    $('#accordion').accordion();
    $('.btn').addClass(' hvr-grow');

    $('.product-image').magnificPopup({
      type: 'image'
    });

  }
}
