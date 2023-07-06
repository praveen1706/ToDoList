//jshint esversion: 6

//practice one

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    
    var today = new Date();
    var currendDay = today.getDay();
    var day = "";

    if(currendDay === 6 || currendDay === 0){
        //sunday - saturday : 0 - 6
        // res.send("Yah! It's the weekend!");
        day = "Weekend";
    }
    else{
        // res.write("<p>Today It's not a weekend!</p>")
        // res.write("<h1>Boh! I have to work!</h1>");
        day = "Weekday";
    }
    // <!-- <% if(kindOfDay ===  "Saturday" || kindOfDay === "Sunday"){ %>
    //     <h1 style="color: aqua;"><%= kindOfDay %> ToDo List</h1>
    // <% } else{ %>
    //     <h1 style="color: violet;"><%= kindOfDay %> ToDo List</h1>   
    // <% } %> -->

    switch (currendDay){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";break;
        case 2:
            day = "Tuesday";break;
        case 3:
            day = "Wednesday";break;
        case 4:
            day = "Thursday";break;
        case 5:
            day = "Friday";break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("error: The current day = " + currendDay);     
    }

    res.render("list", {kindOfDay: day});

    res.render("list", {kindOfDay: day});
});

app.listen(3000, function(){
    console.log("Server is started in port: 3000.");
});