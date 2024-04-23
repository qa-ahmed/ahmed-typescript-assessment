import { sumOfOddNumbers } from "./sumOddNumbers"

describe('getOddSum function', () => {
  it('should return 0 for an empty array', () => {
    expect(sumOfOddNumbers([])).toBe(0);
  });

  it('should return the correct sum for an array of odd numbers', () => {
    expect(sumOfOddNumbers([1, 3, 5])).toBe(9);
  });

  it('should return 0 for an array of even numbers', () => {
    expect(sumOfOddNumbers([2, 4, 6])).toBe(0);
  });

  it('should return the correct sum for a mixed array of numbers', () => {
    expect(sumOfOddNumbers([1, 2, 3, 4, 5])).toBe(9);
  });

  it('should return sum if all numbers are negative', () => {
    expect(sumOfOddNumbers([-1, -3, -5])).toBe(-9);
  });

  it('should return sum if all numbers are a mix postive and negative', () => {
    expect(sumOfOddNumbers([-1, -3, 5])).toBe(1);
  });

  it('should return the correct sum for a large array of numbers', () => {
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
    expect(sumOfOddNumbers(numbers)).toBe(2500);
  });
});