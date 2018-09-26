import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

class note {
  todo: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  readonly BASE_URL = "http://localhost:5000";
  lists: Observable<note[]>;
  constructor(private http: HttpClient) {}
  title = "todo";
  list = [];
  ngOnInit() {
    this.lists = this.http.get<note[]>(this.BASE_URL + "/api/todo");
  }

  // addItemTodo(value) {
  //   this.list.push(value);
  //   console.log(this.list);
  // }
  // getTodo() {
  //   this.lists = this.http.get<note[]>(this.BASE_URL + "/api/todo");
  // }
  //Look into .do(() => this.subject.next(todo));
  addItemTodo(todo: string) {
    return this.http.post<note[]>("/api/todo", { todo });
  }
}
