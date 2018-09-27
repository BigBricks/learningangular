import { Injectable } from "@angular/core";
import { note } from "./todo";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todos: note[] = [];
  constructor() {}
  addItemTodo(todo: note): TodoService {
    this.todos.push(todo);
    return this;
  }
  getAllTodos(): note[] {
    return this.todos;
  }
}
