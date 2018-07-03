import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor() { }
  ngOnInit( ) {
    const OneSignal =  window['OneSignal'] || [];
    OneSignal.push(function() {
      console.log('hi');
      OneSignal.init({
        appId: '4c2413b9-18d3-43af-9148-f1624a3146a0',
        autoRegister: false,
        notifyButton: {
          enable: true
        }
      });
    });
  }
}

