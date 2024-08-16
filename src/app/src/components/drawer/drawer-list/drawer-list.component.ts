import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-drawer-list',
  standalone: true,
  imports: [MatListModule, MatDividerModule, NgFor],
  templateUrl: './drawer-list.component.html',
  styleUrl: './drawer-list.component.scss'
})
export class DrawerListComponent {
  componentesPrincipales = [
    { id: 1, name: 'mat-toolbar' },
    { id: 2, name: 'mat-sidenav-drawer' },
    { id: 3, name: 'mat-inputs' },
    { id: 4, name: 'mat-card' },
    { id: 5, name: 'mat-buttons' },
    { id: 6, name: 'mat-divider' }
  ];
}
