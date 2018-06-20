import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';
import { Player } from '../../models/player/player';
import { Observable } from 'rxjs';

@Component( {

    selector: 'app-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: [ './player-list.component.scss' ]

} )
export class PlayerListComponent implements OnInit {

    players: Player[];

    constructor( private playerService: PlayerService ) {


    }

    ngOnInit() {

        this.getAllPlayers();
    }

    getAllPlayers(): void {

        this.playerService
            .getAllPlayersObservable()
            .subscribe( object => { 

                this.players = object.data;
            } );
    }

    sortByPlayerProp( prop: string, defaultProp = 'name' ): void {

        this.players = this.players.sort( ( player1, player2 ) => {

            if (  player1[ prop ] === player2[ prop ] ) {

                return player1[ defaultProp ].localeCompare( player2[ defaultProp ] )
            }

            if ( typeof player1[ prop ] === 'number' ) {

                return player1[ prop ] - player2[ prop ];
            }

            return player1[ prop ].localeCompare( player2[ prop ] );

        } );
    }
}
