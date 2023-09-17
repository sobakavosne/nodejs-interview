const prices = [30, 50, 22, 34, 70, 2, 18, 17, 18, 18]

const maxStockDiff =
  (prices: number[]) =>
    Math.max(
      ...prices.map(
        (price, i) => prices.slice(i + 1).reduce(
          (acc, currentPrice) => currentPrice - price > acc
            ? currentPrice - price
            : acc,
          0
        )
      )
    )

const maxStockDiffDynamic =
  (prices: number[]) =>
    Math.max(
      ...prices.map(
        (currentPrice, i) => currentPrice - Math.min(...prices.slice(0, i))
      )
    );

console.log('maxStockPrice: ', maxStockDiff(prices));
console.log('maxStockDiffDynamic: ', maxStockDiffDynamic(prices));
