// - Require Modules
const express = require('express');
const flash = require('express-flash');
const bp = require('body-parser');
const compression = require('compression');
const app = express();
const formidable = require('formidable');
const fs = require('fs');
const http = require('http');
const https = require('https');
const session = require('express-session');

// -- Set own variables
const httpPort = 80;
const httpsPort = 443;

// -- Use Modules
app.use(compression());
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

// - Set view engine to EJS to render EJS templates
app.set('view engine', 'ejs');

// -- Set static Route
app.use(express.static(__dirname + "/static"));

// - DB Connection
// var connection = require('./db.js');

app.get('/', function (req, res) {
	res.render('pages/index');	
});
app.get('/imp', function (req, res) {
	res.render('pages/impressum');	
});


const httpServer = http.createServer(app);

httpServer.listen(httpPort, () => {
	console.log('HTTP Server running on port: ', httpPort);
});
