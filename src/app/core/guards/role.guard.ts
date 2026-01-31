import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoleService } from '../../services/role.service';

export const roleGuard: CanActivateFn = () => {
  const roleService = inject(RoleService);
  const router = inject(Router);

  if (!roleService.hasRole()) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
