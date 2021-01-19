const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/db');
const user_route = require('./routes/user-route')
const account_route = require('./routes/account_route')


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(user_route);
app.use(account_route);





This is a branch
app.listen(88)