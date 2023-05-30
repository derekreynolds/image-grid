import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
