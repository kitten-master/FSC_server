const express = require('express');
const app = express();
const cors=require('cors');
const bodyParser = require('body-parser');


const registerRouter = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/auth',registerRouter);


app.listen(3000, function () {
    console.log("start!! express server on port 3000")
});


module.exports = app;

