const express = require('express')
const router = express.Router()
const ShowUser = require("../action/users/show.user.action")
const CreateUser = require("../action/users/create.user.action")
const UpdateUser = require("../action/users/update.user.action")
const DeleteUser = require("../action/users/delete.user.action")
const ShowDetailUser= require("../action/users/show.detail.user.action")

router.get("/", async (req, res, next) => {
    let {name,email,phone} = req.query

    try {
        let params = {}

        if (name) {
            params.name = name
        }

        if (email) {
            params.email = email
        }

        if (phone) {
            params.phone = phone
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
        let data = await new ShowDetailUser(id).exec()

        return res.status(200).json({
            status: "success",
            data,
            message: "Get detail of user"
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
        let data = await new UpdateUser(id, req).update()

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


router.delete("/:id", async (req, res) => {
    let { id } = req.params

    try {
        let data = await new DeleteUser(id).exec()

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