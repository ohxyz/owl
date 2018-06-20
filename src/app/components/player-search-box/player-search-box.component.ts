import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../../models/player/player';

@Component( {

    selector: 'app-player-search-box',
    templateUrl: './player-search-box.component.html',
    styleUrls: [ './player-search-box.component.scss' ]

} )
export class PlayerSearchBoxComponent {

    @Input( "term" ) searchTerm: string = '';
    @Output() termSearched = new EventEmitter<any>();

    ngOnInit() {

        
    }

    onSearchButtonClick() {

        console.log( 5, this.searchTerm );

        this.termSearched.emit( this.searchTerm );
    }

    onClearButtonClick() {

        this.searchTerm = '';
    }
}