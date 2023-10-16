
class stockPortfolio{
    constructor(){
        this.collection = {}; // Creates an initial collection object with no keys/values inside (blank collection)
    }

    // Check if the portfolio has no shares/is empty
    isEmpty(){
        if (Object.keys(this.collection).length == 0)
            return true;
        return false;
    }

    // Add new shares to the collection
    addStocks(ticker, sharesToAdd){
        this.collection[ticker] = sharesToAdd;
    }

    // Check the amount of unique companies I have shares of
    getNumTickers(){
        return Object.keys(this.collection).length;
    }
}


exports.stockPortfolio = stockPortfolio;