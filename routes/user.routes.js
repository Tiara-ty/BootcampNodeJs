const express = require('express')
const router = express.Router()
const ShowUser = require("../action/users/show.user.action")
const CreateUser = require("../action/users/create.user.action")
const UpdateUser = require("../action/users/update.user.action")
const DeleteUser = require("../action/users/delete.user.action")

router.post("/", async (req, res, next) => {
    try {
        let data = await new CreateUser(req).exec()

        return res.status(201).json({
            status: "success",
            data,
            message: "User created successfully"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get("/", async (req, res, next) => {
    let {name,email,phone,password} = req.query

    try {
        let params = {}

        if (name) {
            params.name = name
        }

        if (email) {
            params.description = description
        }

        if (phone) {
            params.owner = owner
        }

        let data = await new ShowUser(params).getAll()
        console.log(params)
        
        return res.status(200).json({
            status: "success",
            data,
            message: "Get User"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: "Data not found"
        })
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        let { id } = req.params
        let data = await new ShowUser(id).exec()
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
    let { id } = req.params
    let { name, email, phone,password, fresh } = req.body
    let updated_data = {
        name,
        email,
        phone,
        password,
        fresh
    }

    try {
        let data = await new UpdateUser(id, updated_data)

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
        let data = await new DeleteUser(id)

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

router.post("/search", async (req, res) => {
    try {
        let data = await new SearchUser(req).exec()

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
module.exports = router