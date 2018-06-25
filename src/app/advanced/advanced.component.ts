import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-advanced',
  template: '<h1>Quedan: {{seconds}}</h1>',
})
export class AdvancedComponent implements OnInit {

  @Input() seconds: number;
  intervalId: number;
  public oper: string;
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() progress: EventEmitter<number> = new EventEmitter();

  constructor() {  }

  private tick(): void {
    switch (this.oper) {
      case 'pause':
        this.progress.complete();
        break;
      case 'reanudar':
        if (--this.seconds < 1) {
          clearTimeout(this.intervalId);
          // Un evento es emitido cuando finalice la cuenta atrás
          this.complete.emit(null);
        }
        break;
      case 'restart':
        this.seconds = 15;
        this.progress.emit(this.seconds);
        this.oper = 'reanudar';
        break;
      default:
        break;
    }
  }

  ngOnInit() {
    this.oper = 'reanudar';
    this.intervalId = window.setInterval(() => this.tick(), 1000);
  }

}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'timer2',
  templateUrl: './advanced.component.html',
})
export class Timer2Component {
  onCountdownCompleted(): void {
    alert('¡Tiempo Acabado!');
  }
}
