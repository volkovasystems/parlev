
const assert = require( "assert" );
const parlev = require( "./parlev.js" );

assert.deepEqual( parlev( [ [ 1, 2, 3 ] ] ), [ 1, 2, 3 ], "should be deeply equal" );

assert.deepEqual( parlev( [ [ 1, 2, 3 ], 1, 2, 3 ] ), [ [ 1, 2, 3 ], 1, 2, 3 ], "should be deeply equal" );

console.log( "ok" );
