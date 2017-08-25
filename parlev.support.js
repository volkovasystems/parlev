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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"arid": "arid",
              			"arkount": "arkount",
              			"doubt": "doubt",
              			"falzy": "falzy",
              			"firs": "firs",
              			"raze": "raze",
              		}
              	@end-include
              */

var arid = require("arid");
var arkount = require("arkount");
var doubt = require("doubt");
var falzy = require("falzy");
var firs = require("firs");
var raze = require("raze");

var parlev = function parlev(parameter) {
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

	if (falzy(parameter) || !doubt(parameter, AS_ARRAY)) {
		throw new Error("invalid parameter");
	}

	if (!doubt(parameter, ARRAY)) {
		parameter = raze(parameter);
	}

	if (arid(parameter)) {
		return parameter;
	}

	var argument = firs(parameter);
	if (arkount(parameter) == 1 && doubt(argument, AS_ARRAY)) {
		return raze(argument);

	} else {
		return parameter;
	}
};

module.exports = parlev;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmxldi5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYXJrb3VudCIsImRvdWJ0IiwiZmFsenkiLCJmaXJzIiwicmF6ZSIsInBhcmxldiIsInBhcmFtZXRlciIsIkFTX0FSUkFZIiwiRXJyb3IiLCJBUlJBWSIsImFyZ3VtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFFBQVFILFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUksT0FBT0osUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNSyxPQUFPTCxRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNTSxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLFNBQWpCLEVBQTRCO0FBQzFDOzs7Ozs7Ozs7OztBQVdBLEtBQUlKLE1BQU9JLFNBQVAsS0FBc0IsQ0FBQ0wsTUFBT0ssU0FBUCxFQUFrQkMsUUFBbEIsQ0FBM0IsRUFBeUQ7QUFDeEQsUUFBTSxJQUFJQyxLQUFKLENBQVcsbUJBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksQ0FBQ1AsTUFBT0ssU0FBUCxFQUFrQkcsS0FBbEIsQ0FBTCxFQUFnQztBQUMvQkgsY0FBWUYsS0FBTUUsU0FBTixDQUFaO0FBQ0E7O0FBRUQsS0FBSVIsS0FBTVEsU0FBTixDQUFKLEVBQXVCO0FBQ3RCLFNBQU9BLFNBQVA7QUFDQTs7QUFFRCxLQUFJSSxXQUFXUCxLQUFNRyxTQUFOLENBQWY7QUFDQSxLQUFJTixRQUFTTSxTQUFULEtBQXdCLENBQXhCLElBQTZCTCxNQUFPUyxRQUFQLEVBQWlCSCxRQUFqQixDQUFqQyxFQUE4RDtBQUM3RCxTQUFPSCxLQUFNTSxRQUFOLENBQVA7O0FBRUEsRUFIRCxNQUdLO0FBQ0osU0FBT0osU0FBUDtBQUNBO0FBQ0QsQ0EvQkQ7O0FBaUNBSyxPQUFPQyxPQUFQLEdBQWlCUCxNQUFqQiIsImZpbGUiOiJwYXJsZXYuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicGFybGV2XCIsXG5cdFx0XHRcInBhdGhcIjogXCJwYXJsZXYvcGFybGV2LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJwYXJsZXYuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwicGFybGV2XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9wYXJsZXYuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJwYXJsZXYtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRBcmd1bWVudCBsZXZlbGluZy5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXJrb3VudFwiOiBcImFya291bnRcIixcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImZpcnNcIjogXCJmaXJzXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYXJrb3VudCA9IHJlcXVpcmUoIFwiYXJrb3VudFwiICk7XG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZpcnMgPSByZXF1aXJlKCBcImZpcnNcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5cbmNvbnN0IHBhcmxldiA9IGZ1bmN0aW9uIHBhcmxldiggcGFyYW1ldGVyICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicGFyYW1ldGVyOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRBcmd1bWVudHMsXG5cdFx0XHRcdFx0QXJyYXlcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCBwYXJhbWV0ZXIgKSB8fCAhZG91YnQoIHBhcmFtZXRlciwgQVNfQVJSQVkgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHBhcmFtZXRlclwiICk7XG5cdH1cblxuXHRpZiggIWRvdWJ0KCBwYXJhbWV0ZXIsIEFSUkFZICkgKXtcblx0XHRwYXJhbWV0ZXIgPSByYXplKCBwYXJhbWV0ZXIgKTtcblx0fVxuXG5cdGlmKCBhcmlkKCBwYXJhbWV0ZXIgKSApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXI7XG5cdH1cblxuXHRsZXQgYXJndW1lbnQgPSBmaXJzKCBwYXJhbWV0ZXIgKTtcblx0aWYoIGFya291bnQoIHBhcmFtZXRlciApID09IDEgJiYgZG91YnQoIGFyZ3VtZW50LCBBU19BUlJBWSApICl7XG5cdFx0cmV0dXJuIHJhemUoIGFyZ3VtZW50ICk7XG5cblx0fWVsc2V7XG5cdFx0cmV0dXJuIHBhcmFtZXRlcjtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJsZXY7XG4iXX0=
//# sourceMappingURL=parlev.support.js.map
