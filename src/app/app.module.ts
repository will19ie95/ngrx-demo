import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { MaterialModule } from "./material.module";

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
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot({
      message: messageReducer,
      post: postReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
