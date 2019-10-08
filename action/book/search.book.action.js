const Book = require("../../models/books")

class SearchBook {
    constructor(req) {
        this.title = req.body.title
    }

    async exec() {
        try {
            let data = await Book.find({
                title : this.title
            }).exec()

            if (data.length == 0) {
                throw error ("Data not found")
            }

            return data
        } catch(err) {
            throw err
        }
    }
}



module.exports = SearchBook