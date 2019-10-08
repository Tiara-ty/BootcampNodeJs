const Shop = require("../../models/shop.model")

class UpdateShop {
    constructor(id,req) {
        this.id = id,
        this.name = req.body.name,
        this.description = req.body.description,
        this.owner = req.body.owner
    }

   
    async update() {
        try {
            let data = {
                name : this.name,
                description: this.description,
                owner: this.owner
            }
            let query = await Shop.findOneAndUpdate({
                _id: this.id,
                
            }, data, {new : true}).exec()

            return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = UpdateShop