import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, SearchComponent, TaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  selectedTask: Task = {
    creador: 'Juan',
    duracion: 100,
    id_tarea: 3,
    id_usuario: 2,
    nombre: 'tarea',
    usuarios: ['asd'],
  };

  public onSearchValue() {}
}
