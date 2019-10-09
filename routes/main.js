const verifyToken = require("../middlewares/verify_token.middlewares")
const users = require("./user.routes")
const index = require("./index")
const books = require("./book.routes")
const shops = require("./shop.routes")
const auth = require("./auth.routes")

const routes = (app) => {
    app.use("/", index)
    app.use("/book", books)
    app.use("/shop", shops)
    app.use("/auth", auth)
    app.use("/user", verifyToken(), users)
}

module.exports = routes