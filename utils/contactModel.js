var mongoose = require('mongoose')

var contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:String,
    phone:String,
    create_date:{
        type:Date,
        default:Date.now
    }
})

var Contact = module.exports = mongoose.model('contact', contactSchema)

module.exports.get = (callback_f, limit) =>{
    Contact.find(callback_f).limit(limit)
}