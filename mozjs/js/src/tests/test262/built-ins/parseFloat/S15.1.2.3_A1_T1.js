// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString
es5id: 15.1.2.3_A1_T1
description: Checking for boolean primitive
---*/

assert.sameValue(parseFloat(true), NaN, "true");
assert.sameValue(parseFloat(false), NaN, "false");

reportCompare(0, 0);