import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './src/components/toolbar/toolbar.component';
import { DrawerComponent } from "./src/components/drawer/drawer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, DrawerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'utilizacion-componentes-angular-material';
}
