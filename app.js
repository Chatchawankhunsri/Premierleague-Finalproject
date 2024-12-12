const express = require('express');
const app = express();
const path = require('path');
const mysql = require("mysql");
const bodyParser = require("body-parser");
const session = require('express-session');
const bcrypt = require('bcrypt');

// Import matchData
const matchData = require('./matchData');

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Session middleware
app.use(session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "PremierAccounts",
    port: process.env.DB_PORT || 3306
});

// Global authentication middleware
app.use((req, res, next) => {
    // Array of paths that don't require authentication
    const publicPaths = ['/', '/login', '/register', '/auth', '/Registration'];
    
    // Check if the path is public
    if (publicPaths.includes(req.path)) {
        return next();
    }
    
    // For all other paths, require login
    if (!req.session.loggedin) {
        return res.redirect('/login');
    }
    
    next();
});

// Routes
app.get('/', (req, res) => {
    if (req.session.loggedin) {
        res.sendFile(path.join(__dirname, 'public', 'home.html'));
    } else {
        res.redirect('/login');
    }
});

app.get('/home', (req, res) => {
    if (req.session.loggedin) {
        res.sendFile(path.join(__dirname, 'public', 'home.html'));
    } else {
        res.redirect('/login');
    }
});

app.get("/login", (req, res) => {
    if (req.session.loggedin) {
        res.redirect('/home');
    } else {
        res.sendFile(path.join(__dirname, "public", "login.html"));
    }
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "register.html"));
});

app.get(['/results', '/results.html'], (req, res) => {
    res.render('results', { matchData: matchData });
});

app.post("/Registration", async (req, res) => {
    try {
        const { username, password, email, date, phoneNumber, sex, fullname, retypePassword } = req.body;

        if (password !== retypePassword) {
            return res.send("Passwords do not match!");
        }

        connection.query("SELECT * FROM accounts WHERE username = ?", [username], async (err, results) => {
            if (err) {
                console.error('Database error:', err);
                return res.send("Database error occurred");
            }
            
            if (results.length > 0) {
                return res.send("Username already exists!");
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = {
                fullname,
                username,
                password: hashedPassword,
                email,
                phoneNumber,
                birthDate: date,
                gender: sex
            };

            connection.query("INSERT INTO accounts SET ?", user, (err, result) => {
                if (err) {
                    console.error('Insert error:', err);
                    return res.send("Error registering user");
                }
                console.log('User registered successfully');
                res.redirect('/login');
            });
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.send("Error registering user");
    }
});

app.post("/auth", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.send("Please enter username and password");
        }

        connection.query("SELECT * FROM accounts WHERE username = ?", [username], async (err, results) => {
            if (err) {
                console.error('Database error:', err);
                return res.send("Database error occurred");
            }

            if (results.length === 0) {
                return res.send("Username not found");
            }

            const match = await bcrypt.compare(password, results[0].password);
            if (!match) {
                return res.send("Incorrect password");
            }

            req.session.loggedin = true;
            req.session.username = username;
            req.session.userID = results[0].id;
            res.redirect("/home");  // Changed from /Home to /home
        });
    } catch (error) {
        console.error('Login error:', error);
        res.send("Error during login");
    }
});

app.get("/Home", (req, res) => {
    res.send(`Welcome ${req.session.username}! <a href="/logout">Logout</a>`);
});

app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.error(err);
        }
        res.redirect("/login");
    });
});

// Update the login route to include screenshot
app.get("/login", (req, res) => {
    // Take screenshot logic would go here if implementing
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});