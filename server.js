const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');
// const notesRoute = require('./routes');

app.use(express.static('public'));

// app.use('/notes', notesRoute);

app.get('/notes', (req, res) => {
    // res.send('GET to /notes works now');
    // console.log(__dirname);
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.listen(PORT, () => 
    console.log('Listening on http://localhost:3001')
)