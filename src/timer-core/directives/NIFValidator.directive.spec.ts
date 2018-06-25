import { NIFValidator } from './validaciones.directive';
import { FormControl } from '@angular/forms';

describe('Validacion de NIF', () => {
  let fn: any;
  beforeAll(() => {
    fn = NIFValidator();
  });
  it('Un NIF valido', () => {
    const control = new FormControl('12345678Z');
    const rslt = fn(control);
    expect(rslt).toBeNull();
  });
  it('Un NIF vacio', () => {
    const control = new FormControl('');
    const rslt = fn(control);
    expect(rslt).toBeNull();
  });
  it('Un NIF invalido', () => {
    const control = new FormControl('1234Z');
    const rslt = fn(control);
    expect(rslt).not.toBeNull();
    expect(fn(new FormControl('Z12345678'))).not.toBeNull();
  });
});
