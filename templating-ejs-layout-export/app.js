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
//  create views directory to work with ejs/view-engine

// Coding within EJS template:
// We use servlet tags to write only control flow JS statement within html
// It is interpreted line by line
// <%= %> - ejs script tags
// <% %> - ejs tags

// Static resource:
// By default server only serves app.js and views 

// Template vs Layout
// Templates are basically data values wheres layouts are common sections of html page
// We can implement layouts by using <%- inlcude("fileName") %> and crea

// Export Module:
// Module can be a piece of code defined in another js file
// This can be exported if 'modules.export' is assigned within module.
// Once done, we only need to require the module and specify path with __diranem
// To export multiple functions we assign 'modules.export.functionName'.


const bodyParser = require("body-parser");
const express = require("express");
const date = require(__dirname + "/date.js");

// Create app and body parser for post calls handling.
app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
// View engine set to ejs. 
app.set("view engine", "ejs");

let items = [
    "Buy Food", "Cook Food", "Eat Food"
];
let workItems = [];

app.get("/", function(req, res){

    const day = date.getDate();
    
    // Assigns values to the key kindOdDay being used in list.ejs file.
    res.render( "list", { listTitle : day, newListItems: items });
})


app.post('/', function(req, res){
    // Post request.
    // Since port 3000 initially lands on get call block, 
    // list is already rendered with kindOfDay and newListItem is not passed
    // so rendering here will throw an error.
    // so the solution is redirect
    let item = (req.body.newItem);
    console.log(req.body);
    if(req.body.list === "Work List"){
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
})

app.get('/work', function(req, res){
    res.render("list", { listTitle: "Work List", newListItems: workItems});
});

app.get('/about', function(req, res){
    res.render("about");
})


app.listen( process.env.PORT || 3000, function(){
    console.log("Server running at 3000");
})