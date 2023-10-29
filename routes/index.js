
const express = require('express');
const api = require('express').Router();
let jsonData = require('../db/db.json');
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');

api.use(express.json());
api.use(express.urlencoded({ extended: true }));
// const path = require('path');

api.get('/notes', (req, res) => {
    // res.send('GET to /api/notes works now');
    fs.readFile(`${__dirname}/../db/db.json`, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else { 
            jsonData = JSON.parse(data);
        }
     });
    //  console.log('will this show--------');
    //  console.log(jsonData);

    res.json(jsonData);
    // console.log(__dirname);
    // res.sendFile(path.join(__dirname, '../public/notes.html'));
});

api.post('/notes', (req, res) => {
    // console.log(typeof req.body);
    jsonData.push(req.body);
    // console.log(data);

    for (const aNote of jsonData) {
        aNote.id = generateUniqueId();
    }

    dataString = JSON.stringify(jsonData);
    // console.log(jsonData);
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

api.delete(`/notes/:id`, (req, res) => {
    // console.log(req.params.id)
    fs.readFile(`${__dirname}/../db/db.json`, 'utf8', (err, data) => {
        err
          ?  console.error(err)
          :  jsonData = JSON.parse(data)
    });
   
    for (const aNote of jsonData) {
        if (req.params.id === aNote.id) {
            console.log('matching id');
            const index = jsonData.indexOf(aNote);
            // console.log(index);
            jsonData.splice(index, 1);
        }
    }
    dataString = JSON.stringify(jsonData);
    fs.writeFile(`${__dirname}/../db/db.json`, dataString, err => {
        err 
          ? console.error(err)
          : console.log("success")
    });
    res.send('delete successful');
});

module.exports = api;