// src/app/src/components/toolbar/toolbar.component.ts
import { Component, EventEmitter, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Input() sidenav!: MatSidenav;
}