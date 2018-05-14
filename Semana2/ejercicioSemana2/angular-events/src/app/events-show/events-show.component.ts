import { Component, OnInit } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventFilterPipe } from '../pipes/event-filter.pipe';


@Component({
  selector: 'app-events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})
export class EventsShowComponent implements OnInit {

  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''  
  };

  search: string = '';

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
    date: new Date('2018-05-04').toLocaleDateString(),
    description: 'Descripción del segundo evento',
    price: 2
  }];



  constructor() { }

  ngOnInit() {
  }

  orderDate():void {
    this.eventos.sort((e1, e2) => new Date(e1.date).getTime() - new Date(e2.date).getTime());
  };

  orderPrice():void {
    this.eventos.sort((e1,e2)=> e1.price - e2.price);
  }

}
