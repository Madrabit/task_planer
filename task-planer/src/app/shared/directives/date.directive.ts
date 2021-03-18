import { Directive, ElementRef, HostListener, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: 'input [date]'
})
export class DateDirective  {

  private readonly REGEX = {
    integer: '[0-9]',
  }

  private readonly specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-'];

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) return;
    const filter = new RegExp(this.REGEX['integer'])

    if (!filter.test(event.key)) {
      event.preventDefault();
    }
  }

}
