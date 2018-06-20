import { Component, Input } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';
import { Player } from '../../models/player/player';
import { Observable } from 'rxjs';

@Component( {

    selector: 'app-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: [ './player-list.component.scss' ]

} )
export class PlayerListComponent {

    players: Player[];
    sortFlag: number = 1;
    lastPropSorted: string = '';

    @Input( 'textFiltered' ) filtered: string;

    constructor( private playerService: PlayerService ) {


    }

    ngOnInit() {

        console.log( 'player-list onInit', this.filtered );

        this.getAllPlayers();
    }

    ngOnChanges() {

        console.log( 'player-list onChange', this.filtered );
    }

    getAllPlayers(): void {

        this.playerService
            .getAllPlayersObservable()
            .subscribe( object => { 

                this.players = object.data.slice( 10, 20 );
            } );
    }

    sortByPlayerProp( prop: string, defaultProp = 'name' ): void {

        this.sortFlag = ( this.lastPropSorted === prop ) ? this.sortFlag * -1 : 1;

        this.players.sort( ( player1, player2 ) => {

            if (  player1[ prop ] === player2[ prop ] ) {

                return player1[ defaultProp ].localeCompare( player2[ defaultProp ] ) * this.sortFlag; 
            }

            if ( typeof player1[ prop ] === 'number' ) {

                return ( player1[ prop ] - player2[ prop ] ) * this.sortFlag;
            }

            return player1[ prop ].localeCompare( player2[ prop ] ) * this.sortFlag;

        } );

        this.lastPropSorted = prop;
    }
}
