const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/Varastosaldo', { useNewUrlParser: true });
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');


app.use('/', routes);

app.listen(3000);

