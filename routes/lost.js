const express = require('express');
const jwt  = require('jsonwebtoken')
var router = express.Router();
const lost = require('../models/lost');
const auth = require('../auth');

router.post('/addlost', (req, res, next) => {
    lost.create({
        name: req.body.name,
        type: req.body.type,
        location: req.body.location,
        phone:req.body.phone,
        details:req.body.details,
        image:req.body.image,
        status:req.body.status
    }).then((lost) => {
        let token = jwt.sign({ losyId: lost._id }, process.env.SECRET);
        res.json({ status: "Lost Added Successfully!", token: token });
    }).catch(next);
});

router.get('/listlost',(req,res,next)=>{
    lost.find({},(err,treks)=>
    {
        if(err){
            res.json(next)
        }
        res.json(lost)
    });
})


module.exports = router;