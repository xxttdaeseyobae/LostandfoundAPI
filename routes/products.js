const express = require('express');
var router = express.Router();
const productsModel = require('../models/products');

router.route('/')
    .get( async (req, res) =>{
        try{
            const data = await productsModel.find({})
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
        const post = new productsModel({
            productname: req.body.productname,
            location: req.body.location,
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

router.get('/product',(req,res,next)=>{
    productsModel.find({})
    .then((result)=>{
        res.json(result)
    })
    .catch(next)
})

module.exports = router;