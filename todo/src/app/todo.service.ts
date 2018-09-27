import { Injectable } from "@angular/core";

class note {
  todo: string;
}

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {}
}
