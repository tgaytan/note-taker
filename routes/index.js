const api = require('express').Router();
const path = require('path');

api.get('/notes', (req, res) => {
    // res.send('GET to /notes works now');
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

api.post('/notes', (req, res) => {
    res.send('POST to /notes works now');
});

// api.delete(`/api/notes/${id}`, (req, res) => {
// });

module.exports = api;