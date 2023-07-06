//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");   //adding modules as external file

const app = express();

let items = ["Buy food", "Cook food", "Eat food"];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); //for css -> public folder created

app.set("view engine", "ejs");  //view folder created

app.get("/", function(req, res){

    // let day = date.getDate();   //calling module file 
    let day = date.getDay();   //calling module file 

    res.render("list", {listTitle: day, newListItems: items}); 
    //only one res.render is allowed
});

app.post("/", function(req, res){
    let item = req.body.newItem;    // newItem is input name in ejs file
    // res.render("list", {newItem: add});    error will 
    
    if(req.body.list === "Work List"){  //list is button name in ejs file
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);   //adding list item to li 
        res.redirect("/");
    } 
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});  //listTitle is heading tag in ejs file
});

app.post("/work", function(req, res){
    let item = req.body.newItem;    // newItem is input name in ejs file
    workItems = push(item);
    res.redirect("/work");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(3000, function(){
    console.log("Server is started in port: 3000.");
});