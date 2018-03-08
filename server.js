// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function (request, response) {
    var noeuds = [
        { nom: 'Nœud papillon Saint Louis front de mer', prix: 15, url: 'noeud-papillon-saint-louis-front-de-mer' },
        { nom: 'Noeud papillon So What', prix: 65, url: 'noeud-papillon-so-what' },
        { nom: 'Noeud papillon Blue in green', prix: 65, url: 'noeud-papillon-blue-in-green' }
    ];
    var intro = "C'est bientôt la fête des pères";

    response.render('pages/index', {
        noeuds: noeuds,
        intro: intro
    });
});

// about page 
app.get('/about', function (request, response) {
    response.render('pages/about');
});

app.listen(3000);
console.log('Hop, on écoute sur 3000');
