const mongoose = require('mongoose');
//create a table with column name
const User = mongoose.model('User',{
    Name: {
        type: String
    },
    Address: {
        type: String
    },
    Phone: {
        type: String
    }
})
module.exports = User;