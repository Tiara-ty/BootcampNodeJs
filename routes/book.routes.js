const express = require('express')
const router = express.Router()
const getAll= require("../action/book/show.book.action")
const CreateBook = require("../action/book/create.book.action")
const UpdateBook = require("../action/book/update.book.action")
const DeleteBook = require("../action/book/delete.book.action")
const ShowDetailBook = require("../action/book/show.detail.book.action")

router.post("/", async (req, res, next) => {
    try {
        let data = await new CreateBook(req).exec()

        return res.status(201).json({
            status: "success",
            data,
            message: "Book created successfully"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get('/', async (req, res) => {
    try{
        let data = await new getAll().exec()
        return res.send({
            status: 'berhasil',
            data,
            message: 'berhasil get semua data'
        })
    }catch(err){
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        let { id } = req.params
        let data = await new ShowDetailBook(id).exec()

        return res.status(200).json({
            status: "success",
            data,
            message: "Get detail of Book"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.put("/:id", async (req, res, next) => {
    
    try {
        let { id } = req.params
        let data = await new UpdateBook(id, req).update()

        return res.status(200).json({
            status: "success",
            data,
            message: "User data updated successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.delete("/:id", async (req, res) => {
    let { id } = req.params

    try {
        let data = await new DeleteBook(id).exec()

        return res.status(200).json({
            status: "success",
            data,
            message: "User data deleted successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

module.exports = router