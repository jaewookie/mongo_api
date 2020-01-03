var express = require('express')
var router = express.Router()
var contactController = require('../utils/contactController.js')
//default api response

router.get('/', (req, res)=>{
    res.json({
        status:"API It's working",
        message:"Welcome to RESTHUB API"
    })
})

router.route('/contacts').get(contactController.index).post(contactController.new)

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete)

// router.get('/contacts/:contact_id', contactController.view)

module.exports=router