import { Directive, Input, Output, HostListener, EventEmitter, HostBinding, OnInit } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({  selector: '[bancaWinConfirm]' })
export class WindowConfirmDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('bancaWinConfirmMessage') winConfirmMessage = '¿Seguro?';
  // tslint:disable-next-line:no-output-rename
  @Output('bancaWinConfirm') winConfirm: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-inferrable-types
  @HostBinding('class.pressed') isPressed: boolean = false;

  @HostListener('click', ['$event'])
  confirmFirst() {
    if (window.confirm(this.winConfirmMessage)) {
      this.winConfirm.emit(null);
    }
  }
  @HostListener('mousedown') hasPressed() {
    this.isPressed = true;
  }
  @HostListener('mouseup') hasReleased() {
    this.isPressed = false;
  }
  ngOnInit(): void {
   console.log('bancaWinConfirm');
  }

}
// tslint:disable-next-line:directive-selector
@Directive({  selector: '[bancaShow]' })
export class ShowDirective {
  // tslint:disable-next-line:no-inferrable-types
  @HostBinding('hidden') hidden: boolean = false;
  @Input('bancaShow') set show(value: boolean) { this.hidden = !value; }
}
