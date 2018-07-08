import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

// NGRX
import { StoreModule } from "@ngrx/store";
import { messageReducer } from "./message/message.reducer";
import { PostComponent } from "./post/post.component";
import { postReducer } from "./post/post.reducer";
import { MessageComponent } from "./message/message.component";

@NgModule({
  declarations: [AppComponent, MessageComponent, PostComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      message: messageReducer,
      post: postReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
