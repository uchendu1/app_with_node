var express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.get("/", (req, res)=>{
res.send("welcome to my home page!!!")
});

// ================bodyparser======
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// ============bodyparser===================

// ========imported routes=============
app.use('/',  require('./routes/users'));



const port = 3000;
app.listen(port, ()=>{
    console.log(`Port ${port} is listening......`)
});