import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-players',
    templateUrl: './search-players.component.html',
    styleUrls: ['./search-players.component.scss']
})
export class SearchPlayersComponent implements OnInit {

    parentTerm: string = 'Parent';
    parentFiltered: string = 'Filtered';

    constructor() { }

    ngOnInit() {


    }

    onSearch( text ) {

        console.log( 'onSearch', text );
        this.parentFiltered = text;
    }

}
