import * as myUtils from '../utils/Calculate';

test('pure function', () => {
  expect(myUtils.Test()).toBe(10);
});

test('is even', () => {
  expect(myUtils.isEven(2)).toBe(true)
  expect(myUtils.isEven(3)).toBe(false)
  expect(myUtils.isEven(5)).toBe(false)
});
