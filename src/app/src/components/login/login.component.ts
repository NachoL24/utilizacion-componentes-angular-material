import { Component, inject} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MainContainerComponent } from "../layout/main-container/main-container.component";
import { MatButtonModule } from '@angular/material/button';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  standalone: true,
  providers: [MatSnackBar],
  imports: [MatInputModule, MatIconModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,MatButtonModule, MatCardModule, MainContainerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _snackBar = inject(MatSnackBar);
  hide = signal(true);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
  }
  formSubmit($e: Event, email: string, password: string) {
    $e.preventDefault();
    this._snackBar.open(`Login Credentials: ${email} - ${password}`, 'Close');
  }
}
