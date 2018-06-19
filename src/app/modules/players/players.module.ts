import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SearchPlayersComponent } from '../../components/search-players/search-players.component';
import { PlayerListComponent } from '../../components/player-list/player-list.component';
import { CommonModule } from '@angular/common';

@NgModule( {
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        PlayerListComponent,
        SearchPlayersComponent
    ],
    exports: [
        SearchPlayersComponent
    ]
} )
export class PlayersModule { }
