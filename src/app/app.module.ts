import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    UiSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
