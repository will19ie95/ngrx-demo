import { Component, OnInit } from "@angular/core";
import { Post } from "./post.reducer";
import { Observable } from "../../../node_modules/rxjs";
import { Store } from "@ngrx/store";
import { PostActionTypes } from "./post.actions";
import * as PostActions from "./post.actions";

interface AppState {
  post: Post;
}

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  post$: Observable<Post>;

  text: string;

  constructor(private store: Store<AppState>) {
    this.post$ = store.select("post");
    console.log("got post", this.post$);
  }

  ngOnInit() {}

  editText() {
    if (this.text) {
      this.store.dispatch(new PostActions.EditText(this.text));
    }
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  reset() {
    this.store.dispatch(new PostActions.Reset());
  }
}
