const Book = require("../../models/books")
const User = require("../../models/user")

class getAll {
    constructor() {
        
    }

    async exec() {
        try{
            let query = await Book.find({}).populate([
                {
                    path: 'author',
                    model: User
                }
            ]).exec()
            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = getAll