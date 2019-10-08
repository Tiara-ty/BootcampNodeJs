const User = require("../../models/user")

class DeleteUser {
    constructor(id) {
        this.id = id
    }

    async exec() {
        try {
            let query = await User.findOneAndDelete({
                _id: this.id
            }).exec()

            return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = DeleteUser