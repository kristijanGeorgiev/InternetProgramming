import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTooMuch]',
  standalone: true
})
export class TooMuchDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appTooMuch(value: number) {
    if (value > 5) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else  {
      // Clear if number is not positive
      this.viewContainer.clear();
    }
  }

}
