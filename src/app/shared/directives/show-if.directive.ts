import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowIf]',
})
export class ShowIfDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  @Input() set appShowIf(condition: boolean) {
    this.viewContainer.clear();

    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
