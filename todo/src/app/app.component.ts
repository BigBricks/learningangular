import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
class note {
  todo: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  readonly BASE_URL = "http://localhost:5000";
  constructor(private http: HttpClient) {}
  title = "todo";
  list = [];

  addItemTodo(value) {
    this.list.push(value);
    console.log(this.list);
  }
  getTodo() {
    this.list = this.http.get(this.BASE_URL + "/api/todo");
  }
}
