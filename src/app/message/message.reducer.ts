import { Action } from "@ngrx/store";

export function messageReducer(state: string = "Hello World", action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case "ENGLISH":
      return (state = "Hello World");

    case "CHINESE":
      return (state = "Ni Hao");

    case "KOREAN":
      return (state = "Annyong");

    default:
      return state;
  }
}
