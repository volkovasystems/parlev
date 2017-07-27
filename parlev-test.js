
const assert = require( "assert" );
const parlev = require( "./parlev.js" );

assert.deepEqual( parlev( [ [ 1, 2, 3 ] ] ),
	[ 1, 2, 3 ], "should be equal to [ 1, 2, 3 ]" );

assert.deepEqual( parlev( [ [ 1, 2, 3 ], 1, 2, 3 ] ), [ [ 1, 2, 3 ], 1, 2, 3 ],
	"should be equal to [ [ 1, 2, 3 ], 1, 2, 3 ]" );

console.log( "ok" );
