// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * ToInt32(first expression) is called first, and then ToInt32(second expression)
 *
 * @section 11.10.3
 * @path 11_Expressions/11.10_Binary_Bitwise_Operators/11.10.3_OR_Operator/S11.10.3_A2.3_T1.js
 * @description Checking with "throw"
 */

//CHECK#1
var x = { valueOf: function () { throw "x"; } };
var y = { valueOf: function () { throw "y"; } };
try {
   x | y;
   $ERROR('#1.1: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; x | y throw "x". Actual: ' + (x | y));
} catch (e) {
   if (e === "y") {
     $ERROR('#1.2: ToInt32(first expression) is called first, and then ToInt32(second expression)');
   } else {
     if (e !== "x") {
       $ERROR('#1.3: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; x | y throw "x". Actual: ' + (e));
     }
   }
}
