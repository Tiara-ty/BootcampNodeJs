const User = require("../../models/user")

class UpdateUser {
    constructor(id,req) {
        this.id = id,
        this.name = req.body.name,
        this.email = req.body.email,
        this.phone = req.body.phone,
        this.password = req.body.password
    }

   
    async update() {
        try {
            let data = {
                name : this.name,
               email: this.email,
               phone: this.phone,
               password : this.password
            }
            let query = await User.findOneAndUpdate({
                _id: this.id,
            }, data, {new : true } ).exec()

            return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = UpdateUser