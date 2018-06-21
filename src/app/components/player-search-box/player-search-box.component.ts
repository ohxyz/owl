import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../../models/player/player';

@Component( {

    selector: 'app-player-search-box',
    templateUrl: './player-search-box.component.html',
    styleUrls: [ './player-search-box.component.scss' ]

} )
export class PlayerSearchBoxComponent {

    searchTerm: string = '';
    @Output() search = new EventEmitter<any>();

    ngOnInit() {

        
    }

    onSearchTermChange() {

        this.search.emit( this.searchTerm );
    }

    onClearButtonClick() {

        this.searchTerm = '';
    }
}