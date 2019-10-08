const Shop = require("../../models/books")

class DeleteBook {
    constructor(id) {
        this.id = id
    }

    async exec() {
        try {
            let query = await Book.findOneAndDelete({
                _id: this.id
            }).exec()

            return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = DeleteBook