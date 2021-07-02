// Install and use nodemon module - Helps with rerunning server on file save.
// Require external libraries 
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// Below code handles form data in request body.
// Extended helps with nested JSON 
// urlencoded helps parse form data.
app.use(bodyParser.urlencoded({extended: true}));

// Define Get:
// To send index.html we use sendFile method
// To get path within cloud servers use __dirname
//  __dirname gives file path of current folder within server.
app.get("/", function(req, res){
    console.log(`Current folder => ${__dirname}`);
    res.sendFile(__dirname + "/index.html");
});


// Post call:
// body-parser is required to access submitted form data
// req.body.properties are of type string.
app.post('/', function(req, res){
    console.log(req.body);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    res.send(`Thanks for posting that. Sum: ${num1 + num2}`);
});


// BMI Calculator:
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function(req, res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight/(height * height);
    res.send(`Your BMI is ${bmi}`);
});

// Network Status Codes:
// 100s - Loading
// 200s - Calls successful
// 300s - Security Issues
// 400s - Client side error
// 500s - Server side error

// Port:
app.listen(3000, function(){
    console.log("Listening at 3000");
});