import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectAuthState } from '../../store/auth/auth.selectors';
import { AuthActions } from '../../store/auth/auth.actions';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private store = inject(Store);

  // define form controls and methods for login functionality here
  email = '';
  password = '';

  // Error message to display login errors and isLoading to show a loading spinner
  isLoading$: Observable<boolean> = this.store.select(selectAuthState).pipe(
    map(loadingState => loadingState.isLoading)
  );

  error$: Observable<string | null> = this.store.select(selectAuthState).pipe(
    map(erroMessage => erroMessage.error)
  );

  onSubmit() {
    this.store.dispatch(AuthActions.login({ 
      email: this.email, 
      password: this.password 
    }));
  }
}
