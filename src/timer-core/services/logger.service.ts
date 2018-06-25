import { Injectable, InjectionToken, Inject, Optional } from '@angular/core';

export const ERROR_LEVEL = new InjectionToken<number>('ERROR_LEVEL');

@Injectable()
export class LoggerService {
  private nivel = 5;

  constructor(@Optional() @Inject(ERROR_LEVEL) nivel: number ) {
    if (nivel != null) {
      this.nivel = nivel;
    }
  }

  log(msg: string): void {
    if (this.nivel > 3) {
      console.log(msg);
    }
  }
  info(msg: string): void {
    if (this.nivel > 2) {
      if (console.info) {
        // tslint:disable-next-line:no-console
        console.info(msg);
      } else {
        this.log(msg);
      }
    }
  }
  warn(msg: string): void {
    if (this.nivel > 1) {
      console.warn(msg);
    }
  }
  error(msg: string): void {
    if (this.nivel > 0) {
      console.error(msg);
    }
  }
}
