const numbers = [1, 5, 12, 15, 17, 2, 6, 4, 3];
const target = 6;

const findFirstPair =
  (numbers: number[], target: number) =>
    numbers.reduce(
      (acc, x, i, arr) => acc.concat(
        arr
          .slice(i + 1)
          .filter(y => x + y === target)
          .map(y => [x, y])
      ),
      []
    );

console.log('findFirstPair: ', findFirstPair(numbers, target));
