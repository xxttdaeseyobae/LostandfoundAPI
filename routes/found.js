const express = require('express');
const jwt  = require('jsonwebtoken')
var router = express.Router();
const found = require('../models/found');
const auth = require('../auth');

router.post('/addfound', (req, res, next) => {
    found.create({
        name: req.body.name,
        type: req.body.type,
        location: req.body.location,
        phone:req.body.phone,
        details:req.body.details,
        image:req.body.image,
        status:req.body.status
    }).then((found) => {
        let token = jwt.sign({ losyId: found._id }, process.env.SECRET);
        res.json({ status: "Found Added Successfully!", token: token });
    }).catch(next);
});

router.get('/listfound',(req,res,next)=>{
    found.find({},(err,treks)=>
    {
        if(err){
            res.json(next)
        }
        res.json(found)
    });
})


module.exports = router;