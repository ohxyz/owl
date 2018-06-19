import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable( {

    providedIn: 'root'
} )
export class PlayerService {

    private playersUrl = '/api/players';

    constructor( private http: HttpClient ) {

    }

    getAllPlayers (): Observable<any> {

        let playersObservable = this
                .http
                .get<any>( this.playersUrl );

        console.log( 3, playersObservable );

        return playersObservable;
    }
}
