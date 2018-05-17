import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMouseAction]'
})
export class MouseActionDirective implements OnInit {

  @Input('appMouseActionColor') appMouseActionColor: string;
  @Input() defaultValue = 'red';

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
  }

  @HostListener('mouseover') onMouseOver() {
    this.changeBackGroundColor(this.appMouseActionColor || this.defaultValue);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackGroundColor('white');
  }

  private changeBackGroundColor(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }
}
