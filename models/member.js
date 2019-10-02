/**
 * Member Schema
 */

 const mongoose = require("mongoose")
 const Schema = mongoose.Schema

 let memberSchema = new Schema ({
     no_anggota : Number,
     name : String,
     phone : Number,
     email : String,
     alamat : String,

     created_at : {
         type : Date,
         default : Date.now
     },

     updated_at : {
        type : Date,
        default : Date.now
     }
 })

 let Member = mongoose.model("Member", memberSchema)

 module.exports = Member