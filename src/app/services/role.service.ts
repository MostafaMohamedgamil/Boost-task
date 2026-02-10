import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RoleService {
  private readonly ROLE_KEY = 'userRole';
  role = signal<string | null>(this.loadRoleFromStorage());

  private loadRoleFromStorage(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.ROLE_KEY);
    }
    return null;
  }

  setRole(role: string) {
    this.role.set(role);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.ROLE_KEY, role);
    }
  }

  getRole() {
    return this.role();
  }

  hasRole() {
    return !!this.role();
  }

  clearRole() {
    this.role.set(null);
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.ROLE_KEY);
    }
  }
}
