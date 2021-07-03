// Templating:
// Currently sending multiple line of html code uses re.write, do so is hard.
// Alternative to this option is to use res.sendFile,
// But making and sending a separate html file for each conditional change 
// is repetitive, time consuming and resource intensive(multiple HTML docs).
// There are several tools to fix this, one of the solution is ejs.
// EJS:
// Embedded JavaScript templating. Helps you pass variables to HTML pages.
//  cmd: npm install ejs
//  set app with view engine parameters
//  create views directory

const bodyParser = require("body-parser");
const express = require("express");

// Create app and body parser for post calls handling.
app = express();
// app.use(bodyParser.urlencoded({extended: true}));
app.set("view-engine", "ejs");

// Date object usage.
app.get("/", function(req, res){

    const today = new Date();
    const currentDay = today.getDay();

    if(currentDay === 6 || currentDay === 7){
        res.send("Yay! Today is weekend.");
    } else {
        res.send("Uh oh! Today is a weekday.");
    }

})


app.listen( process.env.PORT || 3000, function(){
    console.log("Server running at 3000");
})