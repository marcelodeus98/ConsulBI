const express = require('express');
const bodyParser = require('body-parser');


const app = express();

let PORT =  5050;

// Use EJS 
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Use body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Config database


// Routes
app.get('/', (req, res) => {
    res.render('login');
});

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/dashbord', (req, res) => {
    res.render('dashbord');
});

app.get('/new_user', (req, res) => {
    res.render('newUser');
});

app.get('/new_dashbord', (req, res) => {
    res.render('newDashbord');
});

// Connect server
app.listen(PORT, (err) => {
    if(err){
        console.log('Error, is not loading server...');
    }
    else {
        console.log(`Server is runing, in ${PORT}...`);
    }
});