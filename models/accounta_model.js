const mongoose = require('mongoose');
const { modelName } = require('./user_model');

const Account = mongoose.model('Account',{
    Account_Name: {
        type: String
    },
    Account_Address: {
        type : String
    }
})
module.exports = Account