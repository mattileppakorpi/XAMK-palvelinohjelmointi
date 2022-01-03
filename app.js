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

/*16.6.2019 Matti Leppäkorpi 20h. Tein palvelimen jonne voi lisätä kolmessa eri kaupungissa toimivan 
Oy Yhtymä Ab:n varastosaldolle uusia asioita ja hakea varastosaldot, sekä poistaa asioita varastosalolta.
Tämän lisäksi sivustolta näkee kaupunkikohtaisen viimeisimmän lämpötilan.
Tein aluksi etusivun html-muotoon, mutta muutin sen pugiksi netistä löytyneen kääntäjän avulla. Css-
tiedoston kanssa meinasi olla ongelmia kunnes sain siihen apua ja lisäsin routes.js tiedostoon 
router.use('/static', express.static(path.join(__dirname, '..', 'static'))); 
Taidot loppuivat siihen kun yritin keksiä miten location-tiedon voisi antaa valmiista vaihtoehdoista 
käyttäjälle <select>-tagilla. Tämän avulla olisin ehkä voinut keksiä konstin myös varastojen sorttaamisen
kaupungeittain. Nyt tuo kaupunkikohtainen varastosaldo näyttää koko varaston. */