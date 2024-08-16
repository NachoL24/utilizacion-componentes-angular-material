import { Component } from '@angular/core';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [ToolbarComponent, MatSidenavModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {
  events: string[] = [];
  opened: boolean = true;
}
