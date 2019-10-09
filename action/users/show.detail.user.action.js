const user = require("../../models/user")

class ShowDetailUser {
    constructor(id) {
        this.id = id
    }

    async exec() {
        try {
            let query = await user.findOne({
                _id: this.id
            }).exec()

            return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = ShowDetailUser