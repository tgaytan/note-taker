const notes = require('express').Router();
// const path = require('path');

notes.get('/', (req, res) => {
    // res.send('GET to /notes works now');
    // console.log(__dirname);
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// notes.post('/', (req, res) => {
//     res.send('POST to /notes works now');
// });

// notes.delete(`/api/notes/${id}`, (req, res) => {
// });

module.exports = notes;