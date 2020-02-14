const express = require('express');
var router = express.Router();
const petsModel = require('../models/pets');

router.route('/')
    .get( async (req, res) =>{
        try{
            const data = await petsModel.find({})
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
        const post = new petsModel({
            breed: req.body.breed,
            locationfound: req.body.locationfound,
            sex:req.body.sex,
            phone: req.body.phone,
            details: req.body.details,
            image: req.body.image,
            status:req.body.status,
            type:req.body.type
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

router.get('/pets',(req,res,next)=>{
    petsModel.find({})
    .then((result)=>{
        res.json(result)
    })
    .catch(next)
})

module.exports = router;