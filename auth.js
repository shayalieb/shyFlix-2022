//connecting the jwt key the jwtStrategy, requiring jwt, and connecting to the passport.js file
const jwtSecret = 'your_jwt_key';
const jwt = require('jsonwebtoken'),
    passport = require('passport');
    require('./passport');

//defining the obejcts to encode along ith expiration and algorithm HS256 for encoding
    let generateJWTToken = (user) => {
    return jwt.sign(user, jwtSecret, {
        subject: user.Username,
        expiresIn: '7d',
        algorithm: 'HS256'
    });
}

//Once you are logged in
module.exports = (router) => {
    router.post('/login', (req, res) => {
        passport.authenticate('local', {session: false}, (error, user, info) => {
            if(error || !user) {
                return res.status(400).json({
                    message: 'Something is not right',
                    user: user
                });
            }
            req.login(user, {session: false}, (error) => {
                if (error) {
                    res.send(error);
                }
                let token = generateJWTToken(user.toJSON());
                return res.json({user, token})
            })
        })(req, res)
    })
}

