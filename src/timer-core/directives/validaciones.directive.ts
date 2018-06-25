import { Directive, SimpleChanges, Input, OnChanges, forwardRef, Attribute, ElementRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[upperCase]',
  providers: [{provide: NG_VALIDATORS, useExisting: UpperCaseValidatorDirective, multi: true}]
})
export class UpperCaseValidatorDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} {
    const valor = control.value;
    if (valor) {
      return valor !== valor.toUpperCase() ? {'upperCase': {valor}} : null;
    } else {
      return null;
    }
  }
}

export const MIN_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};

/**
 * A directive which installs the `MinValidator` for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `min` attribute.
 *
 *
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[min][formControlName],[min][formControl],[min][ngModel]',
  providers: [MIN_VALIDATOR],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'[attr.min]': 'min ? min : null'}
})
export class MinValidator implements Validator, OnChanges {
  private _validator: ValidatorFn;
  private _onChange: () => void;

  @Input() min: string;

  ngOnChanges(changes: SimpleChanges): void {
    if ('min' in changes) {
      this._createValidator();
      if (this._onChange) { this._onChange(); }
    }
  }

  validate(c: AbstractControl): ValidationErrors|null {
    return this.min == null ? null : this._validator(c);
  }

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }

  private _createValidator(): void {
    this._validator = Validators.min(parseInt(this.min, 10));
  }
}

export const MAX_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};

/**
 * A directive which installs the `MaxValidator` for any `formControlName,
 * `formControl`,
 * or control with `ngModel` that also has a `max` attribute.
 *
 *
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[max][formControlName],[max][formControl],[max][ngModel]',
  providers: [MAX_VALIDATOR],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'[attr.max]': 'max ? max : null'}
})
export class MaxValidator implements Validator,
    OnChanges {
  private _validator: ValidatorFn;
  private _onChange: () => void;

  @Input() max: string;

  ngOnChanges(changes: SimpleChanges): void {
    if ('max' in changes) {
      this._createValidator();
      if (this._onChange) { this._onChange(); }
    }
  }

  validate(c: AbstractControl): ValidationErrors|null {
    return this.max != null ? this._validator(c) : null;
  }

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }

  private _createValidator(): void {
    this._validator = Validators.max(parseInt(this.max, 10));
  }
}

export function naturalNumberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    return /^[1-9]\d*$/.test(control.value) ? null : { naturalNumber: { valid: false } };
  };
}
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[naturalNumber][formControlName],[naturalNumber][formControl],[naturalNumber][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: NaturalNumberValidatorDirective, multi: true }]
})
export class NaturalNumberValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } {
        if (control.value) {
          return naturalNumberValidator()(control);
        }
        return null;
    }
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
  providers: [ { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true } ]
})
export class EqualValidatorDirective implements Validator {
  constructor( @Attribute('validateEqual') public validateEqual: string) {}
  validate(control: AbstractControl): { [key: string]: any } {
      const valor = control.value;
      const cntrlBind = control.root.get(this.validateEqual);
      if (!cntrlBind ) {
        return { 'validateEqual': `Missing control ${this.validateEqual}` };
      } else if (valor) {
        return (!cntrlBind || valor !== cntrlBind.value) ? { 'validateEqual': `${valor} <> ${cntrlBind.value}` } : null;
      }
      return null;
  }
}

const URL_REGEXP = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i;
// tslint:disable-next-line:max-line-length
const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
const NUMBER_REGEXP = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/;

export function typeMismatchValidator(tipo: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    switch (tipo) {
      case 'url': return URL_REGEXP.test(control.value) ? null : { 'typeMismatch': true };
      case 'email': return EMAIL_REGEXP.test(control.value) ?  null : { 'typeMismatch': true };
      case 'number': return NUMBER_REGEXP.test(control.value) ?  null : { 'typeMismatch': true };
      default: return { 'validationMessage': 'Unknown type.', 'typeMismatch': true } ;
    }
};
}
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[type=url],[type=email],[type=number]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => TypeValidatorDirective), multi: true }
    ]
})
export class TypeValidatorDirective implements Validator {
    constructor(private elem: ElementRef) { }
    validate(control: AbstractControl): { [key: string]: any } {
        const valor = control.value;
        const dom = this.elem.nativeElement;
        if (valor) {
          if (dom.validity) {
            return dom.validity.typeMismatch ? { 'validationMessage': dom.validationMessage, 'typeMismatch': true } : null;
          }
          const tipo = dom.type.toLowerCase();
          return typeMismatchValidator(tipo)(control);
        }
        return null;
    }
}

export function NIFValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
      const err = { valnif: { invalidNif: true} };
      if (!control.value) { return null; }
      if (/^\d{1,8}\w$/.test(control.value)) {
          const letterValue = control.value.substr(control.value.length - 1);
          const numberValue = control.value.substr(0, control.value.length - 1);
          return letterValue.toUpperCase() === 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(numberValue % 23)
              ? null : err;
      } else { return err; }
  };
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[valnif][formControlName],[valnif][formControl],[valnif][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NIFValidatorDirective, multi: true }]
})
export class NIFValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } {
      if (control.value) {
          return NIFValidator()(control);
      }
      return null;
  }
}


export const VALIDACIONES_DIRECTIVES = [ UpperCaseValidatorDirective, MinValidator, MaxValidator,
  NaturalNumberValidatorDirective, EqualValidatorDirective, TypeValidatorDirective, NIFValidatorDirective ];
