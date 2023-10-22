const express = require('express');
const app = express();
const PORT = 3001;
const apiRoute = require('./routes');

app.use(express.static('public'));

app.use('/api', apiRoute);

app.listen(PORT, () => 
    console.log('Listening on http://localhost:3001')
)