const express = require('express');
const User = require('./Users');

const router = express.Router();

router.get('/admin/users', (req, res) => {
    User.findAll().then(user => {
        res.send('List of users').status(200);
    })
});

router.get('/new', (req, res) => {
    res.render('/newUser').status(200);
});

router.post('/admin/users/register', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    res.json({email: email, password: password})
});

module.exports = router;