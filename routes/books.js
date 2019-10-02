const express = require (`express`)
const router = express.Router()
// const {create, getAll} = require("../actions/books")
const BookModel = require("../models/books")
const {isInteger} = require("lodash")
const User = require("../models/user")

router.post ("/", (req,res) => {
    let { title, description, price, author } = req.body
    price = parseInt(price)
    console.log(`Value of price ${price}`)

    if(isInteger(price) === false) {
        return "Wrong type of `price`"
    }

    var insert_data = {
        title,
        description,
        price,
        author
    }

    let data = new BookModel(insert_data)
    data.save()

    return res.send ({
        status : "success",
        data,
        message : "Book created succesfully!"
    })

})


router.get ("/", async (req,res) => {
    let query = await BookModel.find({})
        .populate([
            {
                path: 'author',
                model: User
            }
        ]).exec()

    return res.send({
        status: "success",
        query,
        message: "Get all book data"
    })

})

module.exports =
    router