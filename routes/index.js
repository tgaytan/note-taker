
const express = require('express');
const api = require('express').Router();
const data = require('../db/db.json');
const fs = require('fs');

api.use(express.json());
api.use(express.urlencoded({ extended: true }));
// const path = require('path');

api.get('/notes', (req, res) => {
    // res.send('GET to /api/notes works now');
    res.json(data);
    // console.log(__dirname);
    // res.sendFile(path.join(__dirname, '../public/notes.html'));
});

api.post('/notes', (req, res) => {
    // console.log(typeof req.body);
    data.push(req.body);
    // console.log(data);
    dataString = JSON.stringify(data);
    // console.log(dataString);
    // console.log(typeof dataString);
    // res.send('POST to /notes works now');
    // console.log(__dirname);
    fs.writeFile(`${__dirname}/../db/db.json`, dataString, err => {
        err 
          ? console.error(err)
          : console.log("success")
    });
    res.send('post successful');
});

// api.delete(`/api/notes/${id}`, (req, res) => {
// });

module.exports = api;