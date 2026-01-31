import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HasRoleDirective } from '../../shared/directives/has-role.directive';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ShowIfDirective } from '../../shared/directives/show-if.directive';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-data',
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    HasRoleDirective,
    CardModule,
    TableModule,
    ShowIfDirective,
    ButtonModule,
    RouterLink
],
  templateUrl: './data.html',
  styleUrl: './data.css',
})
export class Data {
  constructor(public dataService: DataService) {}
  ngOnInit() {
    this.dataService.fetchData();
  }
}
