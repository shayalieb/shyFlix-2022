//Applying the node pakcages
const 
    express = require('express');
    morgan = require('morgan');
    bodyParser = require('body-parser');
    uuid = require('uuid');
    fs = require('fs');
    path = require('path')
    http = require('http')

//Setting the functions
    const app = express();
    const mongoose = require('mongoose');
    const Models = require('./models.js');
    const {check, validateResults } = require('express-validator');
const { error } = require('console');

//Applying the models
    const Movies = Models.Movie;
    const Users = Models.User;

//Setting up the connection with the Mongo databse
mongoose.connect('mongodb://localhost:27017/shyFlixDB', { useNewUrlParser: true, useUnifiedTopology: true });
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

//Welcome text
app.get('/', (req, res) => {
    res.send('Welcome to the shyFlix movieDex');
});    
//Return a list of movies
app.get('/movies', (req, res) => {
    Movies.find()
    .then((movies) => {
        res.status(200).json(movies);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error' + err);
    });
});

//Get movie by title
app.get('/movies/:Title', (req, res) => {
    Movies.findOne({Title: req.params.Title})
    .then((movie) => {
        res.status(200).json(movie);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error' + err)
    });
});

//Get genre my name
app.get('/movies/genre/:Name', (req, res) => {
    Movies.findOne({ 'Genre.Name': req.params.Name})
    .then((movies) => {
        res.send(movies.Genre);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error" + err);
    });
});

//get director data
app.get('/movies/Director/:Name', (req, res) => {
    Movies.findOne({ 'Director.Name': req.params.Name})
    .then((movies) => {
        res.send(movies.Director);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error' + err);
    })
})


//Add a new user
app.post('/users', (req, res) => {
    Users.findOne({Username: req.body.Username})
    .then((user) => {
        if (user) {
            return res.status(400).send(req.body.Username + 'This user already exixst!');
        } else {
            Users
            .create({
                Username: req.body.Username,
                Password: req.body.Password,
                Email: req.body.Email,
                Birthday: req.body.Birthday
            })
            .then((user) => {res.status(201).json(user)})
            .catch((error) => {
                console.error(error);
                res.status(500).send('Error' + error);
            })
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Error' + error);
    });
});


//READ a list of all users
app.get('/users', (req, res) => {
    Users.find()
    .then((users) => {
        res.status(201).json(users);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error' + err);
    });
});

//READ a list of user by Username
app.get('/users/:Username', (req, res) => {
    Users.findOne({ Username: req.params.Username})
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error' + err);
    });
});

//PUT update a users info
app.put('/users/:Username', (req, res) => {
    Users.findOneAndUpdate({ Username: req.params.Username}, { $set: 
        {
            Username: req.body.Username,
            Password: req.body.Password,
            Email: req.body.Email,
            Birthday: req.body.Birthday
        }
     },
     { new: true }, 
     (err, updateUser ) => {
        if(err) {
            console.error(err);
            res.status(500).send('Error' + err);
        } else {
            res.json(updateUser);
        }
     });
});     


//POST a movie ID to a users movies
app.post('/users/:Username/movies/:MovieID', (req, res) => {
    Users.findOneAndUpdate({ Username: req.params.Username}, { $push: 
        { FavoriteMoveis: req.params.MovieID }
     },
     { new: true }, 
     (err, updateUser ) => {
        if(err) {
            console.error(err);
            res.status(500).send('Error' + err);
        } else {
            res.json(updateUser);
        }
     });
});     

//Allow users to delete a movie from the favorites
app.delete('/users/:Username/movies/:MovieID', (req, res) => {
    Users.findOneAndUpdate({ Username: req.params.Username}, { $pull: 
        { FavoriteMoveis: req.params.MovieID }
     },
     { new: true }, 
     (err, updateUser ) => {
        if(err) {
            console.error(err);
            res.status(500).send('Error' + err);
        } else {
            res.json(updateUser);
        }
     });
});  

//Delete a user by user name
app.delete('/users/:Username', (req, res) => {
    Users.findOneAndRemove({ Username: req.params.Username})
    .then((user) => {
        if(!user) {
            res.status(400).send(req.params.Username + 'The username was not found');
        } else {
            res.status(200).send(req.params.Username + 'The user has been deleted');
        }
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error:' + err);
    });
});
// app.delete('/users/:Username', (req, res) => {
//     Users.findByIdAndRemove({ Username: req.params.Username})
//     .then((user) => {
//         if (!user) {
//             res.status(400).send(req.params.Username + 'The user name was not found');
//         } else {
//             res.status(200).send(req.params.Username + 'The user was deleted');
//         }
//     })
//     .catch((err) => {
//         console.error(err);
//         res.status(500).send('Error' + err);
//     });
// });

app.listen(8080, () => console.log('Listening on port 8080'))