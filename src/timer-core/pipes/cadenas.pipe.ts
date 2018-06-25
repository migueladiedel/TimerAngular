import { Pipe, PipeTransform } from '@angular/core';

/**
 * Acorta la cadena ...
 *
 * @export
 * @class ElipsisPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'elipsis'
})
export class ElipsisPipe implements PipeTransform {
  /**
   * Funcion de transformacion
   * @param {*} value Valor al que se aplica el pipe
   * @param {number} maxlen Número máximo de caracteres
   * @returns {*} La cadena acortada
   * @memberof ElipsisPipe
   */
  transform(value: any, maxlen: number): any {
    return (!maxlen || !value || value.length < maxlen || value.length < 4) ?
      value : (value.substr(0, maxlen - 3) + '...');
  }
}
@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, args?: any): any {
      return typeof (value) === 'string' ?
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() :
        value;
  }
}
@Pipe({name: 'striptags'})
export class StripTagsPipe implements PipeTransform {

  transform(text: string, ...allowedTags: any[]): string {
    return allowedTags.length > 0
      ? text.replace(new RegExp(`<(?!\/?(${allowedTags.join('|')})\s*\/?)[^>]+>`, 'g'), '')
      : text.replace(/<(?:.|\s)*?>/g, '');
  }
}

export const CADENAS_PIPES = [ ElipsisPipe, CapitalizePipe, StripTagsPipe ];
