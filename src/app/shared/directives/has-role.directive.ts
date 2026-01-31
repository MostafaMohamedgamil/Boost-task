import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { RoleService } from '../../services/role.service';

@Directive({
  selector: '[appHasRole]',
  standalone: true,
})
export class HasRoleDirective {
  private roleService = inject(RoleService);

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appHasRole(role: string) {
    this.viewContainer.clear();

    if (this.roleService.getRole() === role) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
