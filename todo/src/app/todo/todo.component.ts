import { Component, OnInit } from "@angular/core";
import { note } from "../todo";
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  Todo: note = {
    todo: "freedom"
  };
  constructor() {}

  ngOnInit() {}
}
