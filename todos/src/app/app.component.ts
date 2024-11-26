import { Component } from '@angular/core';
import { TodoInputComponent } from "./todo-input/todo-input.component";
import { TodoListComponent } from './todo-list/todo-list.component';
import { Todo } from '../models/todo';
import { HighlightDirective } from './highlight.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoInputComponent, TodoListComponent, HighlightDirective, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data: Todo[] = [];

  isTitleHighlighed = false;

  constructor() {
    this.data = [{
      id: 1,
      title: "Learn Mongo",
      completed: false
    }, {
      id: 2,
      title: "Learn Express",
      completed: false
    }, {
      id: 3,
      title: "Learn Angular",
      completed: false
    },
    {
      id: 4,
      title: "Learn Node",
      completed: true
    }];
  }

  deleteTodo(id: number) {
    this.data = this.data.filter(todo => todo.id !== id);
  }

  createTodo = (title: string) => {
    const maxId = Math.max(...this.data.map(todo => todo.id));
    this.data = [
      ...this.data,
      {
        id: maxId + 1,
        title,
        completed: false
      }
    ];
  }

  toggleTitleHighlight = () => {
    this.isTitleHighlighed = !this.isTitleHighlighed;
  }

}
