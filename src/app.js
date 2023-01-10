const express=require('express');
const path =require('path');
// const fs =require('fs');
const hbs =require("hbs");
const app=express();
const port=8000;
const pathfile= path.join(__dirname ,"../public");
const templates_path= path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")
// console.log(pathfile)

app.set('view engine', 'hbs');
app.set ('views',templates_path)
hbs.registerPartials(partials_path)
app.use(express.static(pathfile))

app.get("",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("*",(req,res)=>{
    res.render("404error")
})
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})









