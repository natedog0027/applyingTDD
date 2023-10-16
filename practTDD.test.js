const myFunctions = require("./practTDD.js"); // importing the desired functions from practTDD

// Create a variable for a base portfolio class instance
let port1;

// Create a clean new instance of the portfolio before each test
beforeEach(() => {
  port1 = new myFunctions.stockPortfolio();
});

test('Testing constructPortfolio -- success', () => {
  expect(port1.collection).toEqual({});
  });

test('Testing isEmpty', () => {
  expect(port1.isEmpty()).toBeTruthy();
});

// test('Testing addStocks', () => {
//   // addStocks(ticker, sharesToADD)
//   port1.addStocks("GME", 3);
//   port1.addStocks("RBLX", 67);
//   expect(port1.isEmpty()).not.toBeTruthy();
// });

test('Testing purchaseShares', () => {
  // purchaseShares(ticker, numShares)
  port1.purchaseShares("RBLX", 14);
  expect(port1.isEmpty()).not.toBeTruthy();
  expect(port1.getNumShares("RBLX")).toEqual(14);
  
  port1.purchaseShares("RBLX", 13);
  expect(port1.getNumShares("RBLX")).toEqual(27);
});

test('Testing getNumTickers', () => {
  expect(port1.getNumTickers()).toEqual(0);
  port1.purchaseShares("RBLX", 14);
  port1.purchaseShares("GME", 25);
  expect(port1.getNumTickers()).toEqual(2);
  expect(port1.getNumTickers()).not.toEqual(5);
});

test('Testing getNumShares', () => {
  expect(port1.getNumShares("GME")).toEqual(0);
  port1.purchaseShares("GME", 22);
  port1.purchaseShares("RBLX", 3);
  expect(port1.getNumShares("GME")).toEqual(22);
  expect(port1.getNumShares("GME")).not.toEqual(20);
  expect(port1.getNumShares("RBLX")).toEqual(3);
});

test('Testing sellShares', () => {
  // sellShares(ticker, numShares)
  expect(() => {port1.sellShares("RBLX", 15);}).toThrowError(/broke boi/);

  port1.purchaseShares("RBLX", 14);
  port1.sellShares("RBLX", 3);
  expect(port1.getNumShares("RBLX")).toEqual(11);

  expect(() => {port1.sellShares("RBLX", 15);}).toThrowError(/broke boi/);
  expect(port1.getNumShares("RBLX")).toEqual(11);

  port1.sellShares("RBLX", 11);
  expect(port1.getNumShares("RBLX")).toEqual(0);
  expect(port1.isEmpty()).toBeTruthy();
});