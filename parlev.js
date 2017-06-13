"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "parlev",
			"path": "parlev/parlev.js",
			"file": "parlev.js",
			"module": "parlev",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/parlev.git",
			"test": "parlev-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Argument leveling.
	@end-module-documentation

	@include:
		{
			"arkount": "arkount",
			"doubt": "doubt",
			"falzy": "falzy",
			"firs": "firs",
			"raze": "raze",
		}
	@end-include
*/

const arkount = require( "arkount" );
const doubt = require( "doubt" );
const falzy = require( "falzy" );
const firs = require( "firs" );
const raze = require( "raze" );

const parlev = function parlev( parameter ){
	/*;
		@meta-configuration:
			{
				"parameter:required": [
					Arguments,
					Array
				]
			}
		@end-meta-configuration
	*/

	if( falzy( parameter ) || !doubt( parameter, AS_ARRAY ) ){
		throw new Error( "invalid parameter" );
	}

	if( !doubt( parameter, ARRAY ) ){
		parameter = raze( parameter );
	}

	let argument = firs( parameter );
	if( arkount( parameter ) == 1 && doubt( argument, AS_ARRAY ) ){
		return raze( argument );

	}else{
		return parameter;
	}
};

module.exports = parlev;
