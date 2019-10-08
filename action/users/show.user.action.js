const User = require("../../models/user")

class ShowUser {
    constructor(req) {
        this.query = req
    }

    async getAll() {
        try {
           
            let query1 = await User.find(this.query)
            
            return query1
        } catch(err) {
            throw err
        }
    }
}

module.exports = ShowUser