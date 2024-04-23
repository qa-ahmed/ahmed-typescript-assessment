export function sumOfOddNumbers(numbers: number[]): number {
  return numbers.reduce((sum, num) => {
    if (num % 2 !== 0) {
      sum += num; 
    }
    return sum;
  }, 0);
}