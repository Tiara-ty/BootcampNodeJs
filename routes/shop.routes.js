const express = require('express')
const router = express.Router()
const ShowShop = require("../action/shops/show.action")
const CreateShop = require("../action/shops/create.action")
const UpdateShop = require("../action/shops/update.action")
const DeleteShop = require("../action/shops/delete.action")
const SearchShop = require("../action/shops/search.action")

router.get("/", async (req, res, next) => {
    let {name,description,owner} = req.query

    try {
        let params = {}

        if (name) {
            params.name = name
        }

        if (description) {
            params.description = description
        }

        if (owner) {
            params.owner = owner
        }

        let data = await new SearchShop(params).getAll()
        console.log(params)
        
        return res.status(200).json({
            status: "success",
            data,
            message: "Get detail of shop"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: "Data not found"
        })
    }
})

router.post("/", async (req, res, next) => {
    try {
        let data = await new CreateShop(req).exec()

        return res.status(201).json({
            status: "success",
            data,
            message: "Shop created successfully"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        let { id } = req.params
        let data = await new ShowShop(id).exec()
        console.log(`Type of ShowShop is ${typeof ShowShop}`)

        return res.status(200).json({
            status: "success",
            data,
            message: "Get detail of shop"
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
        let data = await new UpdateShop(id, req).update()

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
        let data = await new DeleteShop(id).exec()

        return res.status(200).json({
            status: "success",
            data,
            message: "Shop deleted successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

module.exports = router