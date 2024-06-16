import { Component, inject } from '@angular/core';
import { AuthResponse } from './Authentication/auth-response';
import { AuthService } from './Authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskAngular';
  private authService = inject(AuthService);
  user!: AuthResponse;
  public login!: boolean;


  ngOnInit() {

    this.login = this.authService.isLoggedIn;
    this.user = this.authService.getCurrentAuthUser;
  }

  logout() {
    this.authService.logout();
  }

  refreshToken() {
    this.authService.refreshToken()?.subscribe(() => { });
  }
}
