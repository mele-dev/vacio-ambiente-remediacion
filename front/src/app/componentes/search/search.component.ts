import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchValue: string = 'value';
  numerito = 0;
  searchOutput = output<string>();

  public clickEvent() {
    console.log('searchValue: ' + this.searchValue);
    console.log('click: ' + this.numerito++);
    this.searchOutput.emit(this.searchValue);
  }
}
