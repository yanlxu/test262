// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.15-6-6
description: >
    Array.prototype.lastIndexOf returns correct index when 'fromIndex'
    is 1
includes: [runTestCase.js]
---*/

function testcase() {

        return [1, 2, 3].lastIndexOf(2, 1) === 1;
    }
runTestCase(testcase);
