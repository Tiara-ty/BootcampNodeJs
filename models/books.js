/** 
 * Book schema
 */

 const mongoose = require ("mongoose")
 const Schema = mongoose.Schema

 let bookSchema = new Schema({
     title : String,
     description : String,
     price : {
         type : Number,
         default : null
     },
     author : String,

     created_at : {
         type : Date,
         dafault : Date.now
     },
     updated_at : {
         type : Date,
         default : Date.now
     }
 })

 let Book = mongoose.model("Book", bookSchema)
 
 module.exports = Book