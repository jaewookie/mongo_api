var Contact = require('./contactModel.js')

exports.index = (req, res) =>{
    Contact.get((err, contacts)=>{
        if(err){
            res.json({
                status:"error",
                message:err
            })
        }else{
            res.json({
                status:"success",
                message:"Contacts is successfully recieved",
                data:contacts
            })
        }
    });
}

exports.new = (req, res) =>{
    var contact = new Contact()
    contact.name = req.body.name ? req.body.name : contact.name
    contact.email = req.body.email ? req.body.email : contact.email
    contact.gender = req.body.gender
    contact.phone = req.body.phone

    //save and error check by save method

    contact.save((err)=>{
        if(err){
            res.json({
                status:"error",
                message:err
            })
        }else{
            res.json({
                message:"New Contact created",
                data:contact
            })
        }
    })
}