const User = require("../../models/user")

class CreateUser {
    constructor(req) {
        this.name = req.body.name,
        this.email= req.body.email,
        this.phone = req.body.phone,
        this.password = req.body.password
    }
    

    async exec() {
        try {
            let query = new User({
                name: this.name,
                email: this.email,
                phone: this.phone,
                password : this.password
            })
            await query.save()

            return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = CreateUser