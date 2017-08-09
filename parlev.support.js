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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmxldi5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYXJrb3VudCIsImRvdWJ0IiwiZmFsenkiLCJmaXJzIiwicmF6ZSIsInBhcmxldiIsInBhcmFtZXRlciIsIkFTX0FSUkFZIiwiRXJyb3IiLCJBUlJBWSIsImFyZ3VtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFFBQVFILFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUksT0FBT0osUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNSyxPQUFPTCxRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNTSxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLFNBQWpCLEVBQTRCO0FBQzFDOzs7Ozs7Ozs7OztBQVdBLEtBQUlKLE1BQU9JLFNBQVAsS0FBc0IsQ0FBQ0wsTUFBT0ssU0FBUCxFQUFrQkMsUUFBbEIsQ0FBM0IsRUFBeUQ7QUFDeEQsUUFBTSxJQUFJQyxLQUFKLENBQVcsbUJBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksQ0FBQ1AsTUFBT0ssU0FBUCxFQUFrQkcsS0FBbEIsQ0FBTCxFQUFnQztBQUMvQkgsY0FBWUYsS0FBTUUsU0FBTixDQUFaO0FBQ0E7O0FBRUQsS0FBSVIsS0FBTVEsU0FBTixDQUFKLEVBQXVCO0FBQ3RCLFNBQU9BLFNBQVA7QUFDQTs7QUFFRCxLQUFJSSxXQUFXUCxLQUFNRyxTQUFOLENBQWY7QUFDQSxLQUFJTixRQUFTTSxTQUFULEtBQXdCLENBQXhCLElBQTZCTCxNQUFPUyxRQUFQLEVBQWlCSCxRQUFqQixDQUFqQyxFQUE4RDtBQUM3RCxTQUFPSCxLQUFNTSxRQUFOLENBQVA7O0FBRUEsRUFIRCxNQUdLO0FBQ0osU0FBT0osU0FBUDtBQUNBO0FBQ0QsQ0EvQkQ7O0FBaUNBSyxPQUFPQyxPQUFQLEdBQWlCUCxNQUFqQiIsImZpbGUiOiJwYXJsZXYuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJwYXJsZXZcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwicGFybGV2L3Bhcmxldi5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJwYXJsZXYuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJwYXJsZXZcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcGFybGV2LmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJwYXJsZXYtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRBcmd1bWVudCBsZXZlbGluZy5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXHJcblx0XHRcdFwiYXJrb3VudFwiOiBcImFya291bnRcIixcclxuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcImZpcnNcIjogXCJmaXJzXCIsXHJcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xyXG5jb25zdCBhcmtvdW50ID0gcmVxdWlyZSggXCJhcmtvdW50XCIgKTtcclxuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgZmlycyA9IHJlcXVpcmUoIFwiZmlyc1wiICk7XHJcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xyXG5cclxuY29uc3QgcGFybGV2ID0gZnVuY3Rpb24gcGFybGV2KCBwYXJhbWV0ZXIgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInBhcmFtZXRlcjpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRBcmd1bWVudHMsXHJcblx0XHRcdFx0XHRBcnJheVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIHBhcmFtZXRlciApIHx8ICFkb3VidCggcGFyYW1ldGVyLCBBU19BUlJBWSApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwYXJhbWV0ZXJcIiApO1xyXG5cdH1cclxuXHJcblx0aWYoICFkb3VidCggcGFyYW1ldGVyLCBBUlJBWSApICl7XHJcblx0XHRwYXJhbWV0ZXIgPSByYXplKCBwYXJhbWV0ZXIgKTtcclxuXHR9XHJcblxyXG5cdGlmKCBhcmlkKCBwYXJhbWV0ZXIgKSApe1xyXG5cdFx0cmV0dXJuIHBhcmFtZXRlcjtcclxuXHR9XHJcblxyXG5cdGxldCBhcmd1bWVudCA9IGZpcnMoIHBhcmFtZXRlciApO1xyXG5cdGlmKCBhcmtvdW50KCBwYXJhbWV0ZXIgKSA9PSAxICYmIGRvdWJ0KCBhcmd1bWVudCwgQVNfQVJSQVkgKSApe1xyXG5cdFx0cmV0dXJuIHJhemUoIGFyZ3VtZW50ICk7XHJcblxyXG5cdH1lbHNle1xyXG5cdFx0cmV0dXJuIHBhcmFtZXRlcjtcclxuXHR9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmxldjtcclxuIl19
//# sourceMappingURL=parlev.support.js.map
