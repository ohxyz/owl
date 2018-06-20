import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPlayersComponent } from '../../components/search-players/search-players.component';
import { PlayerListComponent } from '../../components/player-list/player-list.component';
import { PlayerSearchBoxComponent } from '../../components/player-search-box/player-search-box.component';

import { CommonModule } from '@angular/common';

@NgModule( {
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [
        PlayerListComponent,
        SearchPlayersComponent,
        PlayerSearchBoxComponent
    ],
    exports: [
        SearchPlayersComponent,
        PlayerSearchBoxComponent
    ]
} )
export class PlayersModule { 

    constructor() {

        console.log( 'player module constructor' );
    }
}
