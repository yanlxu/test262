// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.match has not prototype property
 *
 * @section 15.5.4.10, 13.2
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.10_String.prototype.match/S15.5.4.10_A6.js
 * @description Checking String.prototype.match.prototype
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.match.prototype !== undefined) {
  $ERROR('#1: String.prototype.match.prototype === undefined. Actual: '+String.prototype.match.prototype );
}
//
//////////////////////////////////////////////////////////////////////////////
