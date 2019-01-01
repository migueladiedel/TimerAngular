import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
  name: 'formatMinToHour'
})
@Injectable()
export class FormatMinToHour implements PipeTransform {
  transform(min: number, args?: any): any {
    let dateFormat = new Date(min* 60 * 1000);
    let salida = dateFormat.getHours()-1 + ' hour(s) '+ dateFormat.getMinutes()+ ' minutes'
    return salida;
  }
}