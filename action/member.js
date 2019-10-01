const Member = require("../models/member")
const { isInteger } = require("lodash")

const create = (req) => {
    let { no_anggota, name, phone, email,alamat } = req.body
    no_anggota = parseInt(no_anggota)
    phone = parseInt(phone)
    console.log(`Value of no anggota ${no_anggota}`)

    if(isInteger(no_anggota) === false) {
        return "No anggota salah `no_anggota`"
    }

    if(isInteger(phone) === false) {
        return "No telepon salah `phone`"
    }

    var insert_data = {
        no_anggota,
        name,
        phone,
        email,
        alamat
    }

    let data = new Member(insert_data)
    data.save()

    return data
}

const getAll = async () => {
    try {
        let query = await Member.find({}).exec()
        let data = query.map((v, i) => {
            return {
                no_anggota: v.no_anggota,
                name : v.name,
                phone: v.phone,
                email: v.email,
                alamat: v.alamat
            }
        })

        return data
    } catch(err) {
        throw err
    }
}

const getDetail = async (id) => {
    try {
        let query = await Member.findOne({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}

const update = async (id, updated_data) => {
    let { no_anggota, name, phone, email, alamat, fresh } = updated_data
    let opts = {
        new: fresh === "true" ? true : false
    }
    let data = {
        no_anggota,
        name,
        phone,
        email,
        alamat,
        fresh
    }

    try {
        let query = await Member.findOneAndUpdate({
            _id: id
        }, data, opts).exec()

        return query
    } catch(err) {
        throw err
    }
}

const destroy = async (id) => {
    try {
        let query = await Member.findOneAndDelete({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}

module.exports = {
    create,
    getAll,
    getDetail,
    update,
    destroy
}