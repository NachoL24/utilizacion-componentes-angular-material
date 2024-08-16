import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-drawer-list',
  standalone: true,
  imports: [MatListModule, MatDividerModule,],
  templateUrl: './drawer-list.component.html',
  styleUrl: './drawer-list.component.scss'
})
export class DrawerListComponent {

}
