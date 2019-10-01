const express = require (`express`)
const router = express.Router()
// const {create, getAll} = require("../actions/books")
const BookModel = require("../models/books")
// const {isString} = require("lodash")

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

//  const get = async() => {

//     let data = await BookModel.find({}).exec()

//     return data
//     }

router.get ("/", async (req,res) => {
    let hasil = await BookModel.find({}).exec()
    
    return res.send ({
        status : "success",
        hasil,
        message : "List book"
    })

})

router.get("/detail", async (req,res) => {
    let query = await BookModel.find({title : `aku`})
    return res.send ({
        status : "success",
        query,
        message : "Didapatkan"
    })
})

module.exports =
    router