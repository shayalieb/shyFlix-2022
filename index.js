//applying the packages into variables
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

//configuring Morgan to cathch the errors
app.use(bodyParser.json());
//morgan
app.use(morgan('common'));
    
//My top 10 movies list
let topMovies = [
    {
        title: 'History of the World',
        auther: 'Mel Brooks',
        category: 'Comedy',
        released: 'June 12, 1981'
    },
    {
        title: 'The Big Lebowski',
        auther: 'Ethan Coen',
        category: 'Comedy',
        released: 'Jan 18, 1998'
    },
    {
        title: 'The Punisher',
        auther: 'Jonathan Hensleigh',
        category: 'Action',
        released: 'April 16, 2004'
    },
    {
        title: 'Lorenzo\'s Oil',
        auther: 'George Miller',
        category: 'Drama',
        released: 'December 30, 1992'
    },
    {
        title: 'This Is Spinal Tap',
        auther: 'Christopher Guest, Michael McKean, Harry Shearer, and Rob Reiner',
        category: 'Comedy and Music',
        released: 'March 2, 1984'
    },
    {
        title: 'Elvis (the movie)',
        auther: 'Baz Luhrmann, Sam Bromell, Craig Pearce, and Jeremy Doner',
        category: 'Drama and Music',
        released: 'June 24, 2022'
    },
    {
        title: 'Bohemian Rhapsody',
        auther: 'Anthony McCarten',
        category: 'Drama and Music',
        released: 'November 2, 2018'
    },
    {
        title: 'Team America: World Police',
        auther: 'Trey Parker',
        category: 'Comedy',
        released: 'October 15, 2004'
    },
    {
        title: 'South Park: Bigger, Longer & Uncut',
        auther: 'Trey Parker, Matt Stone, and Pam Brady',
        category: 'Comedy',
        released: 'June 30, 1999'
    },
    {
        title: 'The Hills Have Eyes',
        auther: 'Alexandre Aja, and Grégory Levasseur',
        category: 'Horror',
        released: 'March 10, 2006'
    }
];

app.get('/', (req, res) => {
    let responseText = '<h1>Welsome to shyFlix the Moviedex</h1>';
    console.log(responseText);
});
app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', {root: __dirname})
});
app.get('/movies', (req, res) => {
    res.json(topMovies);
});    

//static file 
app.use(express.static('/documentation.html'));    

//log err
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is not working!')
});

app.listen(8080, () => {
    console.log('Your book app is running on port 8080.');
});    