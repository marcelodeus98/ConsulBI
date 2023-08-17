const {Sequelize} = require('sequelize');
const sequelize = require('../database/db');

const User = sequelize.define('users' , {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
     email :{
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//CREATE TABLE
User.sync({force: true});

module.exports = User;