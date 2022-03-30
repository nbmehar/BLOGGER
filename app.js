const express = require('express');
const morgan = require('morgan');
const mongoose= require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

const app=express();

const dbURI='db url will come here';

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>app.listen(3000))
.catch(err => console.log(err))

app.set('view engine','ejs');


app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));





app.get('/',function(req,res){
    res.redirect('/blogs');
});




app.get('/about',function(req,res){
    res.render('about',{title:""});
});


app.use(blogRoutes);

app.use((req,res) =>{

    res.status(404).render('404',{title:"404"});

});