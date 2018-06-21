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

    players: Player[] = [];
    allPlayers: Player[] = [];
    sortFlag: number = 1;
    lastPropSorted: string = '';

    @Input( 'searchTerm' ) filtered: string;

    constructor( private playerService: PlayerService ) {


    }

    ngOnInit() {

        console.log( 'player-list onInit', this.filtered );

        this.getAllPlayers();
    }

    ngOnChanges() {

        console.log( 'player-list onChange', this.filtered );

        let props: string[] = [ 'name', 'team', 'role' ];
        
        this.players = this.filterPlayers( this.allPlayers, this.filtered, props );
    }

    filterPlayers( players: Player[], text: string, props: string[] ){

        let playersFiltered: Player[] = [];

        for ( let eachPlayer of players ) {

            for ( let prop of props ) {

                if ( eachPlayer[ prop ].toLowerCase().indexOf( text.toLowerCase() ) >= 0 ) {

                    playersFiltered.push( eachPlayer );
                    break;
                }
            }
        }

        return playersFiltered;
    }

    getAllPlayers(): void {

        this.playerService
            .getAllPlayersObservable()
            .subscribe( object => { 

                this.allPlayers = object.data.slice( 0, 30 );
                this.players = this.allPlayers;
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
