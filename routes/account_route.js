const express = require('express');
const { request } = require('http');
const Account = require('../models/accounta_model');
const { route } = require('./user-route');
const router = express.Router();

router.post('/account/insert', function(req, res){
    const Account_Name = req.body.an;
    const Account_Address = req.body.aa;

    const data = new Account({Account_Name : Account_Name, Account_Address : Account_Address})
    data.save();
});
module.exports = router;