// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.12-3-21
description: Object.isFrozen returns false for all built-in objects (EvalError)
includes: [runTestCase.js]
---*/

function testcase() {
  var b = Object.isFrozen(EvalError);
  if (b === false) {
    return true;
  }
 }
runTestCase(testcase);
