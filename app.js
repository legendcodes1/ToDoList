const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/views/date.js");

const app = express();

let items = ["Buy Food" ,"Cook Food", "Eat Food"];  // items array
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){  // when we first load our home page we go throught this route
    let day = date.getDate();

    res.render("list", {listTitle: day, newListItems: items});  // render list.ejs one called kindofday and numListItems
});

app.post("/", function(req, res){  
    let item = req.body.newItem; // grab hold of the value whatever user inputs

    if(req.body.list === "Work"){
        workItems.push(item);
    } else{
        items.push(item); // add items to array
        res.redirect("/") // then we redirect to home route
    }
   
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems})
});

app.get("/about", function(req, res){
    res.render("about");
});
app.post("/work", function(req, res){
    let item = re.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})
app.listen(3000, function(req,res){
    console.log("Server started on port 3000");
});