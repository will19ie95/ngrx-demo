import { Action } from "@ngrx/store";
import { PostActionsUnion, PostActionTypes } from "../actions/post.actions";

export type Action = PostActionsUnion;

export interface Post {
  text: string;
  likes: number;
}

const defaultState: Post = {
  text: "Change Me",
  likes: 0
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function postReducer(
  state: Post = defaultState,
  action: PostActionsUnion
) {
  console.log(action.type, state);

  switch (action.type) {
    case PostActionTypes.EDIT_TEXT:
      return newState(state, { text: action.payload });

    case PostActionTypes.UPVOTE:
      return newState(state, { likes: state.likes + 1 });

    case PostActionTypes.DOWNVOTE:
      return newState(state, { likes: state.likes - 1 });

    case PostActionTypes.RESET:
      return defaultState;

    default:
      return state;
  }
}
