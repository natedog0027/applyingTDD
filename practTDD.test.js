const myFunctions = require("./practTDD.js"); // importing the desired functions from practTDD

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

  