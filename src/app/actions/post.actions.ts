import { Action } from "@ngrx/store";

export enum PostActionTypes {
  EDIT_TEXT = "[Post] Edit",
  UPVOTE = "[Post] Upvote",
  DOWNVOTE = "[Post] Down",
  RESET = "[Post] Reset"
}

export class EditText implements Action {
  readonly type = PostActionTypes.EDIT_TEXT;
  constructor(public payload: string) {}
}

export class Upvote implements Action {
  readonly type = PostActionTypes.UPVOTE;
}

export class Downvote implements Action {
  readonly type = PostActionTypes.DOWNVOTE;
}

export class Reset implements Action {
  readonly type = PostActionTypes.RESET;
}

export type PostActionsUnion = Upvote | Downvote | EditText | Reset;
