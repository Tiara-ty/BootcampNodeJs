const ShopModel = require("../models/shop.model")

class Shop {
    static async create(req) {
        try {
            let { name, description, owner } = req.body
            let data = new ShopModel({
                name,
                description,
                owner
            })

            await data.save()

            return data
        } catch(err) {
            throw err
        }
    }

    static async all() {
        try {
            let data = await ShopModel.find({}).exec()

            return data
        } catch(err) {
            throw err
        }
    }

    static async update() {
        try {
            let data =  await ShopModel.findByIdAndUpdate({}).exec()
            return data
        }catch (err){
            throw err
        }
    }

    hello() {
        return 'Hello Shop!'
    }

    static async search() {
        try {
            let data = await ShopModel.find({name : "mati 2"}).exec()

            return data
        } catch(err) {
            throw err
        }
    }

}

module.exports = Shop