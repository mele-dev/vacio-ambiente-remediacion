import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  nombre: string = '';
  duracion: number = 0;

  public onSubmit() {
    console.log(`nombre = ${this.nombre}`);
    console.log(`duracion = ${this.duracion}`);
  }
}
