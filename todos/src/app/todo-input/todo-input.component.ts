import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css'
})
export class TodoInputComponent {
  title: string = '';

  @Output()
  createTodo: EventEmitter<string> = new EventEmitter<string>();

  addTodo = () => {
    const title = this.title.trim();
    if (title.length === 0) {
      return;
    }
    this.createTodo.emit(title);
    this.title = '';
  }
}
