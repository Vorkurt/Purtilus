import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[elixBtnPrimary]',
})
export class BtnPrimaryDirective {
  constructor(private _el: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._el.nativeElement, 'vorkurt__primary-btn');
  }

  @HostListener('click') mouseClick() {
    this._renderer.addClass(this._el.nativeElement, 'vorkurt__primary-btn');
  }
}
