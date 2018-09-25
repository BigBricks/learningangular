import { Component } from "@angular/core";

class note {
  todo: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "todo";
  list = [];

  addItemTodo(value) {
    this.list.push(value);
    console.log(this.list);
  }
}
