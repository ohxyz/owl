import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPlayersComponent } from './search-players.component';
import { PlayerFilterComponent } from '../player-filter/player-filter.component';
import { PlayerListComponent } from '../player-list/player-list.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        PlayerFilterComponent,
        PlayerListComponent
    ],
    exports: [
        PlayerFilterComponent,
        PlayerListComponent
    ]
})
export class SearchPlayersModule { }
