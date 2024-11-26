import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '../title-case.pipe';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleCasePipe],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent {

  @Input({required: true})
  todo: Todo = Todo.empty;

  @Output()
  deleteTodo: EventEmitter<number> = new EventEmitter<number>();


  getClasses() {
    return {
      "todo-text": true,
      "todo-completed": this.todo.completed
    }
  }

  doDeleteTodo() {
    this.deleteTodo.emit(this.todo.id);
  }

}
