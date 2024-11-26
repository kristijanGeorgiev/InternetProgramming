import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoDetailsComponent } from "../todo-details/todo-details.component";
import { Todo } from '../../models/todo';
import { TooMuchDirective } from '../too-much.directive';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoDetailsComponent, TooMuchDirective],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  @Input({required: true})
  todos: Todo[] = [];

  @Output()
  deleteTodo: EventEmitter<number> = new EventEmitter<number>();

  doDeleteTodo = (id: number) => {
    this.deleteTodo.emit(id);
  }

}
