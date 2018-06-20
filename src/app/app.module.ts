import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersModule } from './modules/players/players.module';

import { f } from './example.js';

@NgModule( {
    imports: [
        BrowserModule,
        PlayersModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
} )
export class AppModule {

    constructor() {

        f( 'xxxxxxx' );
    }
}
