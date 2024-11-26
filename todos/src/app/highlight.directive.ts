import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() appHighlight: boolean = true;

  @Input() appHighlightColor: string = 'lime';

  private originalBackground: string = '';

  constructor(private el: ElementRef) { 
    // console.log('HighlightDirective created');
    // console.log(el);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.appHighlight) {
      return;
    }

    this.originalBackground = this.el.nativeElement.style.backgroundColor;
    this.highlight();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (!this.appHighlight) {
      return;
    }
    this.unhighlight();
  }

  private highlight() {
    this.el.nativeElement.style.backgroundColor = this.appHighlightColor;
  }

  private unhighlight() {
    this.el.nativeElement.style.backgroundColor = this.originalBackground;
  }

}
