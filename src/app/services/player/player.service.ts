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

    getAllPlayersObservable (): Observable<any> {

        let observable = this.http
                             .get<any>( this.playersUrl );

        return observable;
    }
}
