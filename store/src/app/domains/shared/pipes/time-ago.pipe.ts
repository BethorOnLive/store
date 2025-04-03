import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(creationAt: string): string {
    /*const currentDate = new Date();
    const lastDate = new Date(creationAt);
    const difference:number = currentDate.getTime() - lastDate.getTime();

    const seconds = Math.round(difference/1000);
    const minutes = Math.round(difference/(1000 * 60));
    const hours = Math.round(difference/(1000 * 60 * 60));
    const days = Math.round(difference/(1000 * 60 * 60 * 24));
    const months = Math.round(difference/(1000 * 60 * 60 * 24 * 30));

    let message:string = "";
    if(seconds > 0){
      message = 'Justo ahora'
    }if(minutes > 0){
      message =  minutes > 1 ? `Hace ${minutes} minutos` : `Hace ${minutes} minuto`;
    }if(hours > 0){
      message = `Hace ${hours} ${hours > 1 ? "horas" : "hora"}`;
    }if(days > 0){
      message = `Hace ${days} ${days > 1 ? "dias" : "dia"}`;
    }if(months > 0){
      message = `Hace ${months} meses`;
    }
    return message;*/
    return formatDistanceToNow(new Date(creationAt), { addSuffix: true });

  }
}
