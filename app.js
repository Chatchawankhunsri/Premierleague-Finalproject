const express = require('express');
const app = express();
const path = require('path');

// Import matchData
const matchData = require('./matchData');

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'View')));
app.use(express.static(path.join(__dirname, 'Public')));

// Route to home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

// Results route - handle both /results and /results.html
app.get(['/results', '/results.html'], (req, res) => {
    res.render('results', { matchData: matchData });
});

// Other routes
app.get('/fixtures', (req, res) => {
    res.sendFile(path.join(__dirname, 'fixtures.html'));
});

app.get('/fixtures.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'fixtures.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});