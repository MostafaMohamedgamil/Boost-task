import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RoleService {
  role = signal<string | null>(null);
  setRole(role: string) {
    this.role.set(role);
  }
  getRole() {
    return this.role();
  }
  hasRole() {
    return !!this.role();
  }
}
