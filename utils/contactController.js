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

exports.view =(req, res)=>{
    Contact.findById(req.params.contact_id, (err, result)=>{
        if(!err){
            res.json({
                message: "Contact",
                data:result
            })
        }else{
            res.json({
                message: "failed",
                data:err
            })
        }
    })
}

exports.update = (req, res) => {
    Contact.findById(req.params.contact_id,(err, result)=>{
        if(!err){
            result.name=req.body.name ? req.body.name : result.name
            result.email=req.body.email ? req.body.email : result.email
            result.gender=req.body.gender
            result.phone=req.body.phone
            result.save((err)=>{
                if(err){
                    res.json({
                        status:"error",
                        message:err
                    })
                }else{
                    res.json({
                        message:"Contact Modified",
                        data:result
                    })
                }
            })
        }else{
            res.json({
                message:"error",
                data:err
            })
        }
    })
}

exports.delete = (req, res) =>{
    Contact.remove({_id:req.params.contact_id},(err, result)=>{
        if(!err){
            res.json({
                status:"success",
                message:"contact is successfully deleted "
            })
        }else{
            res.json({
                status:"failed",
                message:err
            })
        }
    })

}