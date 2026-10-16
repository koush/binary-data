'use strict';

const { isType } = require('../src/lib/util');

test('isType', () => {
  expect(
    isType({
      encode() {},
      decode() {},
    })
  ).toBeTruthy();

  expect(isType({})).toBeFalsy();
  expect(isType(null)).toBeFalsy();
  expect(isType({ encode() {} })).toBeFalsy();
  expect(isType({ decode() {} })).toBeFalsy();
});
