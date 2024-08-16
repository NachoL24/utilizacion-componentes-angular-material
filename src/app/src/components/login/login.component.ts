import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MainContainerComponent } from "../layout/main-container/main-container.component";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MainContainerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
