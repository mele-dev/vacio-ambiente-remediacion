import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginPage } from './pages/auth/login/login.page';
import { logueadoGuard } from './guards/logueado.guard';

export const routes: Routes = [
  {
    path: ``,
    redirectTo: `home`,
    pathMatch: `full`,
  },
  {
    path: `home`,
    component: HomeComponent,
  },
  {
    path: `login`,
    component: LoginPage,
  },
];
