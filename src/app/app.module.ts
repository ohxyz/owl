import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchPlayersComponent } from './search-players/search-players.component';
import { SearchPlayersModule } from './search-players/search-players.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchPlayersComponent,
  ],
  imports: [
    BrowserModule,
    SearchPlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
