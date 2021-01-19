//connect to mongo db database_give your database  name
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/first_api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology : true  
})