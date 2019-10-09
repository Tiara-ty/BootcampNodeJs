const Book = require("../../models/books")

class ShowDetailBook {
    constructor(id) {
        this.id = id
    }

    async exec() {
        try {
            let query = await Book.findOne({
                _id: this.id
            }).exec()

            return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = ShowDetailBook