const Book = require("../../models/books")

class UpdateBook{
    constructor(id,req) {
        this.id = id,
        this.title = req.body.title,
        this.description = req.body.description,
        this.price = req.body.price,
        this.author = req.body.author
    }

   
    async exec() {
        try {
            let data = {
                title : this.title,
                description: this.description,
                price: this.price,
                author: this.author
            }
            let query = await Book.findOneAndUpdate({
                _id: this.id,
            }, data ).exec()

            return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = UpdateBook