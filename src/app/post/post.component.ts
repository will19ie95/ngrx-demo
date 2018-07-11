import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Post } from "../reducers/post.reducer";
import { Observable } from "../../../node_modules/rxjs";
import * as PostActions from "../actions/post.actions";

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
  }

  ngOnInit() {}

  editText() {
    if (this.text) {
      this.store.dispatch(new PostActions.EditText(this.text));
      this.text = "";
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
