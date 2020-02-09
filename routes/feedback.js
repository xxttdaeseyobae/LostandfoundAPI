const express = require('express');
var router = express.Router();
const feedbackModel = require('../models/feedback');

router.route('/')
    .get( async (req, res) =>{
        try{
            const data = await feedbackModel.find({})
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
        const post = new feedbackModel({
            fullname: req.body.fullname,
            email: req.body.email,
            feedback: req.body.feedback
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

router.get('/feedback',(req,res,next)=>{
    feedbackModel.find({})
    .then((result)=>{
        res.json(result)
    })
    .catch(next)
})

module.exports = router;