import { Component, inject } from '@angular/core';
import { ApiRestService } from '../../../services/api-rest.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css',
})
export class LoginPage {
  username: string = '';
  password: string = '';
  apiService: ApiRestService = inject(ApiRestService);
  private router: Router = inject(Router);

  public async onSubmit() {
    console.log(`username: ${this.username}`);
    console.log(`password: ${this.password}`);
    const response = await this.apiService.post(
      'auth/',
      JSON.stringify({ username: this.username, contraseña: this.password }),
    );
    this.apiService.setToken(response.token);
    await this.router.navigate(['/tasks']);
  }
}
