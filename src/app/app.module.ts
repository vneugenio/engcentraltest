import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableGridComponent } from './table-grid/table-grid.component';
import { OverrideComponent } from './override/override.component';

@NgModule({
  declarations: [
    AppComponent,
    TableGridComponent,
    OverrideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
