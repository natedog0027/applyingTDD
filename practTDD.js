
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

    // // Add new shares to the collection
    // addStocks(ticker, sharesToAdd){
    //     this.collection[ticker] = sharesToAdd;
    // }

    // Return the amount of unique companies I have shares of
    getNumTickers(){
        return Object.keys(this.collection).length;
    }

    // Return the amount of shares of an inputted ticker
    getNumShares(ticker){
        if (!this.collection[ticker])
            return 0
        return this.collection[ticker];
    }

    purchaseShares(ticker, sharesToBuy){
        if (!this.getNumShares(ticker))
            this.collection[ticker] = sharesToBuy;
        else 
            this.collection[ticker] = this.getNumShares(ticker) + sharesToBuy;
    }

    sellShares(ticker, sharesToSell){
        if (this.getNumShares(ticker) < sharesToSell)
            throw new Error("Can't sell shares you don't have, broke boi");
        else
            this.collection[ticker] = this.getNumShares(ticker) - sharesToSell;
        if (this.getNumShares(ticker) == 0)
            delete this.collection[ticker];
    }


}


exports.stockPortfolio = stockPortfolio;