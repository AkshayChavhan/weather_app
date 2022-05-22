const express = require("express");
const app  = express();
const port = process.env.PORT || 5500 ;
const path =require("path");
const hbs = require("hbs");



// static path
const staticPath = path.join(__dirname,"../public");

//view path
const template_path = path.join(__dirname,"templates/views");

//partials path
const partials_path = path.join(__dirname,"templates/partials");


//creating view engine
app.set("view engine","hbs");
app.set("views" ,template_path);

// register partials
hbs.registerPartials(partials_path);


//adding static page html
app.use(express.static(staticPath));


//rendering index.hbs from hbs view engine
app.get("/" ,(req,res)=>{
    res.render("index.hbs");
});

//rendering about.hbs from hbs view engine
app.get("/about" ,(req,res)=>{
    res.render("about.hbs");
});

//rendering weather.hbs from hbs view engine
app.get("/weather" ,(req,res)=>{
    res.render("weather.hbs");
});

//rendering 404error.hbs from hbs view engine
app.get("*" ,(req,res)=>{
    res.render("404error.hbs" , {
        errorMsg :  "Opps ! page not found"
    });
});


//listening 
app.listen(port , ()=>{
    console.log(`listening to the port at ${port}`);
});