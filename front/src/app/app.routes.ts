import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { TasksPage } from './pages/tasks/tasks.page';
import { TaskidPage } from './pages/tasks/components/taskid/taskid.page';
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
    path: `tasks`,
    component: TasksPage,
    canActivate: [logueadoGuard],
  },
  {
    path: `tasks/:idTarea`,
    component: TaskidPage,
  },
  {
    path: `login`,
    component: LoginPage,
  },
];
