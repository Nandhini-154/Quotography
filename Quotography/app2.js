//this page is same as app1. The method of doing is different !!!!!!


/*Using view engines..
By passing dynamic data from user using express it's necessary to use view engines.
The view engines used here is EJS
*/
const express = require('express');
const morgan = require('morgan');

const app= express();
const mongoose=require('mongoose');
const quoteRoutes=require('./routes/quoteRoutes');
//mongodb connection
const dbURI='mongodb+srv://nandhini1542003:nandy154@cluster0.gwz6ngq.mongodb.net/Quotography';
mongoose
 .connect(dbURI,{useNewurlParser:true,useUnifiedTopology:true})
 .then((result)=>app.listen(3000))
 .catch((err)=>console.log(err));
//register view engines
app.set('view engine','ejs');
//To access the form values sent by the post req during form submission ,this middleware is used below
app.use(express.urlencoded({ extended: true }));
//implementing Third party middle-ware
app.use(morgan('dev'));
app.use(express.static('public'));


app.get('/index',(req,res)=>{
   res.redirect('/quotes');
});

//Using middleware routes
app.use(quoteRoutes);
  

//This block displays the quote using loop and it executes until all the quotes has been displayed.


app.use((req,res)=>{
    res.status(404).render('404',{title:"404 ERROR"});
});