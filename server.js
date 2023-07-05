const express = require('express');
const ejs = require('ejs');
const app = express();

app.get('/', (req, res)=>{
res.render('index');
});
app.set('view engine', 'ejs'); 
app.use(express.static('public'));


app.get('/booking', (req, res)=>{
    res.render('booking');
    });
    app.get('/service', (req, res)=>{
        res.render('service');
        });
        app.get('/testimonials', (req, res)=>{
            res.render('testimonials');
            });

            app.listen(3000, ()=>{
                console.log("Running");
            });