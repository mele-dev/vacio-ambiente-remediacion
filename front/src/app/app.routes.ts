import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { TasksPage } from './pages/tasks/tasks.page';
import { TaskidPage } from './pages/tasks/components/taskid/taskid.page';
import { LoginPage } from './pages/auth/login/login.page';
import { logueadoGuard } from './guards/logueado.guard';
import { NewTaskComponent } from './componentes/new-task/new-task.component';
import { TaskComponent } from './componentes/task/task.component';

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
    // canActivate: [logueadoGuard],
    children: [
      {
        path: '',
        component: TaskComponent,
        title: 'Lista de tareas',
      },
    ],
  },
  {
    path: `tasks/create`,
    component: NewTaskComponent,
    title: 'Crear tarea',
  },
  {
    path: `tasks/:id_tarea`,
    component: TaskidPage,
    title: 'Detalle tarea',
  },
  {
    path: `login`,
    component: LoginPage,
  },
];
