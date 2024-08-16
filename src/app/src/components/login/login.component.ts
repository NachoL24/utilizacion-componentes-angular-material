import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MainContainerComponent } from "../layout/main-container/main-container.component";
import { EmailInputComponent } from "./email-input/email-input.component";
import { PasswordInputComponent } from "./password-input/password-input.component";
import { MatButtonModule } from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatButtonModule, MatCardModule, MainContainerComponent, EmailInputComponent, PasswordInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
