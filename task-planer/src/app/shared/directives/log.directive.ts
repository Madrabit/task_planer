import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input [log]'
})
export class LogDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }


  @HostListener('blur', ['$event'])
  onInput(event: { target: { value: any; }; }) {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '')
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow')
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transient';

}
