const express = require('express');
const app = express();
const path = require('path');

// Serve static files from your View directory
app.use(express.static(path.join(__dirname, 'View')));

// Route to home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Add other routes
app.get('/fixtures', (req, res) => {
    res.sendFile(path.join(__dirname, 'fixtures.html'));
});

app.get('/results', (req, res) => {
    res.sendFile(path.join(__dirname, 'results.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});