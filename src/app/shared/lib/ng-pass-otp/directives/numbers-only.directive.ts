import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[numbersOnly]',
})
export class NumbersOnlyDirective {

  @Input() disabledNumbersOnly: boolean = true;
  constructor(private _elRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    if (!this.disabledNumbersOnly) {
      this._renderer.setAttribute(
        this._elRef.nativeElement,
        'onkeypress',
        'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0'
      );
    }
  }
}
