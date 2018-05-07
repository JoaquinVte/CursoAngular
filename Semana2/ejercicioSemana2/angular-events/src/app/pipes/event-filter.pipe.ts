import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(eventos: IEvent[] , cadena: string): IEvent[] {
    const filter = cadena ? cadena.toLocaleLowerCase() : null;
    
    return  filter ? eventos.filter(evento => evento.title.toLocaleLowerCase().includes(filter)) : eventos;
  }
}
