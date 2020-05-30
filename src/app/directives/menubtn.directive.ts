import {
  Directive,
  OnInit,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appMenubtn]',
})
export class MenubtnDirective implements OnInit {
  constructor() {}

  @HostBinding('class.close') showBox = false;

  @HostListener('click') onClick() {
    this.showBox = !this.showBox;
  }

  ngOnInit() {}
}
