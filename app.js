var express = require('express');
var mysql = require('mysql');
var path = require('path');
var session = require('express-session');

var connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "",
    database: "accounts"
});

const app = express();
app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true
    })
);

app.get('/Home', isAuthenticated, (req,res) => {
    res.sendFile(path.join(__dirname, "/public/home.html"));
})

app.listen(3500);
console.log("Running on port 3500")