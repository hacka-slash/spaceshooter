const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(2000, () => {
    console.log("Hellooooo World!");
})