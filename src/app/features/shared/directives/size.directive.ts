import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSize]'
})

export class SizeDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.setSize('20px');
  }

  private setSize(size: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', size);
  }
}