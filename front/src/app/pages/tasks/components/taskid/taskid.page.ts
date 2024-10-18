import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-taskid',
  standalone: true,
  imports: [],
  templateUrl: './taskid.page.html',
  styleUrl: './taskid.page.css',
})
export class TaskidPage implements OnInit {
  idTarea = input<string>();

  ngOnInit(): void {
    console.log(`logueo el id: ` + this.idTarea());
  }
}
