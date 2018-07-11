import { Component, OnInit } from "@angular/core";
import { Observable } from "../../../node_modules/rxjs";
import { Store } from "../../../node_modules/@ngrx/store";

interface AppState {
  message: String;
}

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {
  message$: Observable<String>;

  constructor(private store: Store<AppState>) {
    this.message$ = store.select("message");
  }
  ngOnInit() {}

  englishMessage() {
    this.store.dispatch({ type: "ENGLISH" });
  }
  chineseMessage() {
    this.store.dispatch({ type: "CHINESE" });
  }
  koreanMessage() {
    this.store.dispatch({ type: "KOREAN" });
  }
}
