import { Component, OnInit } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';


@Component({
  selector: 'app-events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})
export class EventsShowComponent implements OnInit {

  eventos: IEvent[] = [{
    title: 'Primer evento',
    image: '../../assets/evento1.jpg',
    date: new Date('2018-05-05').toLocaleDateString(),
    description: 'Descripción del primer evento',
    price: 1
  },
  {
    title: 'Segunto evento',
    image: '../../assets/evento2.jpg',
    date: new Date('2018-05-05').toLocaleDateString(),
    description: 'Descripción del segundo evento',
    price: 2
  }];

  constructor() { }

  ngOnInit() {
  }

}
