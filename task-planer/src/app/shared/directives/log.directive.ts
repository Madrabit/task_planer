import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'input [log]'
})
export class LogDirective {

  constructor() { }

  @HostListener('blur', ['$event'])
  onInput(event: { target: { value: any; }; }) {
    console.log(event.target.value)
  }
}
