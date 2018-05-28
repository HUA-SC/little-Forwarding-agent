var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var app = express();

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('*', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    console.log("req", req.url);
    next(createError(404));
});


app.listen(3001, (error, data) => {
    global.url = "10.10.100.13:9100";
    console.log("--the defualt  destination address is http://" + global.url);
    rl.question('do you want change the destination address Y/N?', (answer) => {
        if (answer.toLowerCase() === 'y') {
            rl.question('the address (like 127.0.0.1:3000)', (answer1) => {
                global.durl = answer1.toString();
                rl.close();
                console.log("listen 3001");
            });
        }else{
            rl.close();
            console.log("listen 3001");
        }
    });

});
