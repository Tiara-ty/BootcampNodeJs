const Shop = require("../../models/shop.model")

class SearchShop {
    constructor(req) {
        this.query = req
    }

    async getAll() {
        try {
           
            let query1 = await Shop.find(this.query)
            
            // if (query1.length == 0) {
            //     throw error ("Data not found")
            // }

            return query1
        } catch(err) {
            throw err
        }
    }
}

module.exports = SearchShop