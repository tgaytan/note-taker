const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');
const apiRoute = require('./routes');

app.use(express.static('public'));

app.use('/api', apiRoute);

app.get('/notes', (req, res) => {
    // res.send('GET to /notes works now');
    // console.log(__dirname);
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.listen(PORT, () => 
    console.log('Listening on http://localhost:3001')
)