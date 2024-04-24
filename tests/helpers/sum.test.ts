import { expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

test('adds 1 + 2 to equal 3', () => {
  const a = 1;
  const b = 2;

  const result = sum(a, b);

  expect(result).toBe(a + b);
});

test('should return 0 if array is empty', () => {
  const result = addArray([]);
  expect(result).toBe(0);
});

test('should return proper value of addArray function', () => {
  const a = 1;
  const b = 2;
  const c = 3;

  const result = addArray([a, b, c]);
  expect(result).toBe(a + b + c);
});
