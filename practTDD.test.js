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

test('Testing addStocks', () => {
  // addStocks(ticker, sharesToADD)
  port1.addStocks("GME", 3);
  port1.addStocks("RBLX", 67);
  expect(port1.isEmpty()).not.toBeTruthy();
});

test('Testing getNumTickers', () => {
  port1.addStocks("GME", 22);
  port1.addStocks("RBLX", 67);
  expect(port1.getNumTickers()).toEqual(2);
  expect(port1.getNumTickers()).not.toEqual(5);
});

