import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DrawComponent } from './draw/draw.component';
import { DrawAxesComponent } from './draw-axes/draw-axes.component';
import { DrawPathComponent } from './draw-path/draw-path.component';
@NgModule({
  declarations: [
    AppComponent,
    DrawComponent,
    DrawAxesComponent,
    DrawPathComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
