const express = require (`express`)
const router = express.Router()
const BookModel = require("../models/books")

router.post ("/", (req,res) => {
    let {title, description} = req.body 
    var insert_data = {
        title,
        description
    }

    let data = new BookModel(insert_data)
    data.save()

    return res.send ({
        status : "success",
        data,
        message : "Book created succesfully!"
    })

})

module.exports = router