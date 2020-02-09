const express = require('express');
var router = express.Router();
const humanModel = require('../models/human');

router.route('/')
    .get( async (req, res) =>{
        try{
            const data = await humanModel.find({})
            res.json(
                data
            )
        }
        catch(err){
            res.json({
                message: false,
                error: err
            })
        }
    })
    .post( async (req, res) =>{
        const post = new humanModel({
            fullname: req.body.fullname,
            locationfound: req.body.locationfound,
            age:req.body.age,
            sex:req.body.sex,
            phone: req.body.phone,
            details: req.body.details,
            image: req.body.image,
            status:req.body.status
        })

        try{
            const data = await post.save()
            res.json({
                status: 200,
                isSuccess: true,
                data: data,
                message: 'Successfully Inserted'
            })
            console.log("Inserted Successfully");
        }
        catch(err){
            res.json({
                message: err
            })
        }
    })

router.get('/human',(req,res,next)=>{
    humanModel.find({})
    .then((result)=>{
        res.json(result)
    })
    .catch(next)
})

module.exports = router;