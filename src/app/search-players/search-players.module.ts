import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PlayerListComponent } from '../player-list/player-list.component';

@NgModule({
    imports: [
        HttpClientModule
    ],
    declarations: [
        PlayerListComponent
    ],
    exports: [
        PlayerListComponent
    ]
})
export class SearchPlayersModule { }
