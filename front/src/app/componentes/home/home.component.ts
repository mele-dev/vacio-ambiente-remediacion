import { Component, inject, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { Task } from '../../interfaces/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private taskService: TasksService = inject(TasksService);

  taskList: Task[] | undefined = [];

  selectedTask: Task | undefined;

  async ngOnInit() {
    this.selectedTask = this.taskList![0];
    this.taskList = await this.taskService.getAllTasks();
    console.log(this.taskList);
  }

  public onSearchValue(value: string) {
    this.selectedTask = this.taskList?.find(
      (task) => task.id_tarea == parseInt(value),
    );
  }
}
