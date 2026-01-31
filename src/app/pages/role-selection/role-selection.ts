import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RoleService } from '../../services/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-selection',
  imports: [CommonModule, FormsModule, RadioButtonModule, CardModule, ButtonModule],
  templateUrl: './role-selection.html',
  styleUrl: './role-selection.scss',
})
export class RoleSelection {
  // roles = ['Admin', 'Instructor', 'User'];
  roles = [
    { name: 'Admin', description: 'Manage users and settings' },
    { name: 'Instructor', description: 'Create and manage courses' },
    { name: 'User', description: 'Access and participate in courses' },
  ];
  selectedRole: string | null = null;
  // categories: any[];
  constructor(
    private roleService: RoleService,
    private router: Router,
  ) {}
  ngOnInit() {}
  continue() {
    this.roleService.setRole(this.selectedRole!);
    this.router.navigate(['/data']);
  }
}
