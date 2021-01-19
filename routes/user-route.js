const express = require('express');
const { findSourceMap } = require('module');
const { runInNewContext } = require('vm');
const User = require('../models/user_model');
const router = express.Router();

router.post('/insert', function(req, res){

    //fetch data from form
     const Name1 = req.body.nm;
     const Address1 = req.body.add;
     const Phone1 = req.body.ph;
     const data = new User({Name : Name1, Address : Address1, Phone : Phone1})
     data.save();
     res.send("Data inserted")
    //insert into db
})

// const data = new User({FirstName : 'Krishna', Address : 'Samakushi', Phone : '9860999888'})
// data.save();

router.get('/display', function(req, res){
    User.find().then(function(data){
        res.send(data)
    })
})
//for delete
router.delete('/Userdelete/:myid', function(req, res){
    const id = req.params.myid;
    User.deleteOne({_id : id}).then(function(){
        res.send("Successfully deleted")
    })
})
//for update
router.put('/UserUpdate/:myid', function(req, res){
    const id = req.params.myid; // id
    const add = req.body.add; //new data
    User.updateOne({_id : id}, {Address : add}).then(function(){
        res.send("successfully update")
    })
})
module.exports = router;