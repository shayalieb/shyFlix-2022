//Node packages
const express = require('express');
const bodyParser = require('body-parser');
const { title } = require('process');
uuid = require('uuid');
    app = express();

//Middlware
app.use(bodyParser.json());

let movies = [
    {
        Title: 'History of the World',
        Description: 'Cavemen (including Sid Caesar) depict the invention of fire, the first artist (which in turn gives rise to the first critic), the first marriages (Homo sapiens and then homosexual), primitive weapons (particularly spears), and the first funerals. Also depicted are early attempts at comedy and music, by smashing each others feet with rocks and thus creating an orchestra of screams until performing Handel\'s Hallelujah Chorus at the end.',
        Genre: {
            Name: 'Comedy',
            Description: 'The film is a parody of the historical spectacular film genre anthology, including the sword and sandal epic and the period costume drama subgenres. The four main segments consist of stories set during the Stone Age, the Roman Empire, the Spanish Inquisition, and the French Revolution. Other intermediate skits include reenactments of the giving of the Ten Commandments and the Last Supper.',
        },
        Director: {
            Name: 'Mel Brooks',
            Bio: 'Brooks was born on June 28, 1926, in Brooklyn, New York City, to Kate (née Brookman) and Max Kaminsky,[7] and grew up in Williamsburg. His father\'s family were Jewish people from Gdańsk, Poland; his mother\'s family were Jews from Kyiv, in the Pale of Settlement of the Russian Empire (present-day Ukraine).[8][9][10][11] He had three older brothers: Irving, Lenny, and Bernie.[12][13] His father died of tuberculosis at 34 when Brooks was two years old.[14] He has said of his father\'s death, "There\'s an outrage there. I may be angry at God, or at the world, for that. And I\'m sure a lot of my comedy is based on anger and hostility. Growing up in Williamsburg, I learned to clothe it in comedy to spare myself problems—like a punch in the face.',
            Birth: 'June 28, 1926'
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/59/History_of_the_World_poster.jpg',
    },
    {
        Title: 'The Big Lebowski',
        Description: 'Ultimate L.A. slacker Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire\'s missing wife.',
        Genre: {
            name: 'Comedy',
            Description: 'Jeff `The Dude Leboswki is mistaken for Jeffrey Lebowski, who is The Big Lebowski. Which explains why he\'s roughed up and has his precious rug peed on. In search of recompense, The Dude tracks down his namesake, who offers him a job. His wife has been kidnapped and he needs a reliable bagman. Aided and hindered by his pals Walter Sobchak, a Vietnam vet, and Donny, master of stupidity.',
        },
        Director: {
            Name: 'Joel Coen',
            Bio: 'Joel has been married to actress Frances McDormand since 1984. In 1995, they adopted a son, Pedro McDormand Coen, from Paraguay when he was six months old.[23][24] McDormand has acted in several Coen Brothers films: Blood Simple, Raising Arizona, Miller\'s Crossing, Barton Fink, Fargo, The Man Who Wasn\'t There, Burn After Reading, and Hail, Caesar! For her performance in Fargo, she won the Academy Award for Best Actress.',
            Birth: 'November 21, 1957'
        },
        imageUrl: 'https://en.wikipedia.org/wiki/Coen_brothers#/media/File:Coen_brothers_Cannes_2015_2_(CROPPED).jpg'
    },
    {
        Title: 'The Punisher',
        Description: 'This dark action film, based on the comic book series, follows FBI agent Frank Castle (Thomas Jane) as he transforms into the vengeful Punisher after criminals murder his family, including his wife and son. Castle is gravely injured in the attack and believed to be dead by Howard Saint (John Travolta), the crime lord who ordered the hit. Following his recovery, Castle becomes a heavily armed vigilante who will stop at nothing to exact revenge on Saint and dismantle his underworld empire.',
        Genre: {
            name: 'Action',
            Description: 'An undercover FBI agent becomes a vigilante and sets out to unleash his wrath upon the corrupt businessman who slaughtered his entire family at a reunion. Special agent Frank Castle had it all: A loving family, a great life, and an adventurous job.',
        },
        Director: {
            Name: 'Jonathan Hensleigh',
            Bio: 'Jonathan Blair Hensleigh (born February 13, 1959) is an American screenwriter and film director, working primarily in the action-adventure genre, best known for writing films such as Jumanji, Die Hard with a Vengeance, and Armageddon, as well as making his own directorial debut with the 2004 comic book action film The Punisher.',
            Birth: 'February 13, 1959'
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Punisher_ver2.jpg',
    },
    {
        Title: 'Spinal Tap',
        Description: 'This Is Spinal Tap" shines a light on the self-contained universe of a metal band struggling to get back on the charts, including everything from its complicated history of ups and downs, gold albums, name changes and undersold concert dates, along with the full host of requisite groupies, promoters, hangers-on and historians, sessions, release events and those special behind-the-scenes moments that keep it all real.',
        Genre: {
            name: 'Comedy',
            Description: 'Marty DeBergi is a film-maker who decides to make a documentary, a rockumentary actually, about the world\'s loudest band, the English heavy metal group Spinal Tap. The movie is in fact a biting satire and spoof of the whole rock and roll scene that passes itself off as a real documentary of a real band.',
        },
        Director: {
            Name: 'Rob Reiner',
            Bio: 'Robert Norman Reiner (born March 6, 1947) is an American actor and filmmaker. As an actor, Reiner first came to national prominence with the role of Michael "Meathead" Stivic on the CBS sitcom All in the Family (1971 to 1979), a performance that earned him two Primetime Emmy Awards.',
            Birth: 'March 6, 1947'
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Thisisspinaltapposter.jpg',
    },
    {
        Title: 'Elvis the Movie',
        Description: 'From his rise to fame to his unprecedented superstardom, rock \'n\' roll icon Elvis Presley maintains a complicated relationship with his enigmatic manager, Colonel Tom Parker, over the course of 20 years. Central to Presley\'s journey and happiness is one of the most influential people in his life -- Priscilla.',
        Genre: {
            name: 'Music',
            Description: 'Elvis is a 2022 biographical musical drama film directed by Baz Luhrmann, who co-wrote the screenplay with Sam Bromell, Craig Pearce, and Jeremy Doner. The film follows the life of rock and roll icon, singer, and actor Elvis Presley, told from the perspective of his manager, Colonel Tom Parker.',
        },
        Director: {
            Name: 'Baz Luhrmann',
            Bio: 'Mark Anthony "Baz" Luhrmann (born 17 September 1962) is an Australian filmmaker and actor with projects spanning film, television, opera, theatre, music and recording industries. He is regarded by some as a contemporary example of an auteur[2] for his style and deep involvement in the writing, directing, design, and musical components of all his work. He is the most commercially successful Australian director, with four of his films in the top ten highest worldwide grossing Australian films of all time',
            Birth: 'September 17, 1962'
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/79/Elvis_2022_poster.jpg',
    },
];

let users = [
    {
        id: '1',
        name: 'Shaya Lieberman',
        favoriteMovies: [],
    },
    {
        id: '2',
        name: 'Dick dickenson',
        favoriteMovies: [],
    },
    {
        id: '3',
        name: 'Richard Shmuck',
        favoriteMovies: [],
    }
];

//READ all movies movies
app.get('/movies', (req, res) => {
    res.status(200).json(movies);
});
//READ movie by title
app.get('/movies/:title', (req, res) => {
    const { title } = req.params;
    const movie = movies.find(movie => movie.Title === title);
    
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(400).send('The movie you are looking for cannot be found');
    }
});
//READ movie by genre
app.get('/movies/genre/:genreName', (req, res) => {
    const { genreName } = req.params;
    const genre = movies.find(movie => movie.Genre.Name === genreName).Genre;
    
    if (genre) {
        res.status(200).json(genre);
    } else {
        res.status(400).send('The genre you are looking for cannot be found');
    }
});
//READ by director name
app.get('/movies/directors/:directorName', (req, res) => {
    const { directorName } = req.params;
    const director = movies.find(movie => movie.Director.Name === directorName).Director;
    
    if (director) {
        res.status(200).json(director);
    } else {
        res.status(400).send('The movie director you are looking for cannot be found');
    }
});
//POST Adding a new user
app.post('/users', (req, res) => {
    const newUser = req.body;

    if (newUser.name) {
        newUser.id = uuid.v4();
        users.push(newUser);
        res.status(201).json(newUser);
    } else {
        res.status(400).send('You must provide a name to add a new user');
    }
});
//PUT Updating a user
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    
    let user = users.find(user => user.id == id );
    
    if (user) {
        user.name = updatedUser.name;
        res.status(200).json(user);
    } else {
        res.status(400).send('The user you are trying to update does not exist');
    }
});
//POST Adding new movies to an existing users favoriteMovies
app.post('/users/:id/:movieTitle', (req, res) => {
    const { id, movieTitle } = req.params;

    
    let user = users.find(user => user.id == id );
    
    if (user) {
        user.favoriteMovies.push(movieTitle);
        res.status(200).send('The new movie has been added');
    } else {
        res.status(400).send('You need to add a movie in order to update');
    }
});
//DELETE a movie 
app.delete('/users/:id/:movieTitle', (req, res) => {
    const { id, movieTitle } = req.params;

    let user = users.find(user => user.id == id );
    
    if (user) {
        user.favoriteMovies = user.favoriteMovies.filter( title => title !== movieTitle);
        res.status(200).send('The movie has been deleted');
    } else {
        res.status(400).send('The movie cannot be removed');
    }
});
//DELETE a user
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    let user = users.find(user => user.id == id );
    
    if (user) {
        users = users.filter( user => user.id != id);
        res.status(200).send('The user ID has been deleted');
    } else {
        res.status(400).send('Cannot delete user');
    }
});



app.listen(8080, () => console.log('Listening on port 8080'));
    
    