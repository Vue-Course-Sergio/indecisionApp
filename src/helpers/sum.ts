export function sum(a: number, b: number): number {
  return a + b;
}

export const addArray = (arr: number[]): number => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};
