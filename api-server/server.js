const express = require( 'express' );
const app = express();

const PORT = 3000;

app.get( '/', ( request, response ) => { 

    response.send( 'hi' );

} );

app.get( '/players', ( request, response ) => {

    let playersContent = require( './assets/players.json' );

    response.set( { 

        'Content-Type': 'text/json' 
    } );

    setTimeout( () => {

        response.send( playersContent );

    }, 3000 );

} );

app.listen( PORT, () => { 

    console.log( `Server start on port: ${PORT}.` );
} );