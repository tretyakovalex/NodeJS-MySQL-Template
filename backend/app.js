const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const users = require('./routes/addUser');

const PORT = process.env.PORT || 4000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/auth', users);

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});