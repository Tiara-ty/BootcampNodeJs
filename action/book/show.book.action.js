const Book = require("../../models/books")
const User = require("../../models/user")

class ShowBook {
    constructor(id) {
        this.id = id
    }

    async exec() {
        try {
            await Book.find({})
        .populate([
            {
                path: 'author',
                model: User
            }
        ]).exec()

            return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = ShowBook