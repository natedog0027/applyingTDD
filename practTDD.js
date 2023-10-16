
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

}


exports.stockPortfolio = stockPortfolio;