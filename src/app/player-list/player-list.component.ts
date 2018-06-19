import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../data-models/player/player';
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
            .subscribe( players => this.players = players );
    }
}
