const Book = require("../../models/books")
const {isInteger} = require("lodash")

class CreateBook {
    // constructor(req) {
    //     this.title = req.body.title,
    //     this.description = req.body.description,
    //     this.price = req.body.price,
    //     this.author = req.body.author
    // }

    constructor(req) {
        this.title,description,price,author = req.body
        price = parseInt(price)
        if(isInteger(price) === false) {
            return "Wrong type of `price`"
        }
    }
    async exec() {
        try {
            let query = new Book({
                title: this.title,
                description: this.description,
                price: this.price,
                author: this.author
            })
            await query.save()

            return query
        } catch(err) {
            throw err
        }
    }

}


module.exports = CreateBook