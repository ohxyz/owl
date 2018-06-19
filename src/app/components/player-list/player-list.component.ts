import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';
import { Player } from '../../models/player/player';
import { Observable } from 'rxjs';

@Component( {

    selector: 'app-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.css']

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
            .getAllPlayers()
            .subscribe( object => { 

                this.players = object.data;

                console.log( 1, this.players );
            } )

    }
}
