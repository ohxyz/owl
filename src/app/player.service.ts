import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './data-models/player/player';

@Injectable( {

    providedIn: 'root'
} )
export class PlayerService {

    private playersUrl = '/api/players';

    constructor( private http: HttpClient ) {

    }

    getAllPlayers (): Observable<Player[]> {

        let players = this.http.get<Player[]>( this.playersUrl );

        console.log( 3, players );

        return players;
    }
}
