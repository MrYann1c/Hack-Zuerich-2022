// Require MySQL Module & Environment Vars
require('dotenv').config();
const mysql = require('mysql');
// - MySQL DB Connection
// -- DB Credentials
var connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PW,
    database : process.env.DB,
    multipleStatements: true
});
// -- Connection
connection.connect(function(error){
    if (!!error) { console.log(error); }
    else { console.log('-- Connected to Database! --'); }
});

module.exports = connection;
