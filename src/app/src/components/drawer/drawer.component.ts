import { Component } from '@angular/core';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { DrawerListComponent } from "./drawer-list/drawer-list.component";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [ToolbarComponent, MatSidenavModule, DrawerListComponent, LoginComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {
  events: string[] = [];
  opened: boolean = true;
}
