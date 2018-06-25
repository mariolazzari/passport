const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const User = require("../models/User");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user));
});

passport.use(
    new GoogleStrategy(
        {
            // strategy option
            callbackURL: "/auth/google/redirect",
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret
        },
        (accessToken, refreshToken, profile, done) => {
            // check if user already exists
            User.findOne({ googleId: profile.id }).then(currentUser => {
                if (currentUser) {
                    // user found
                    done(null, currentUser);
                } else {
                    // create new user
                    new User({
                        username: profile.displayName,
                        googleId: profile.id,
                        thumbnail: profile._json.image.url
                    })
                        .save()
                        .then(newUser => done(null, newUser))
                        .catch(err => done(err));
                }
            });
        }
    )
);
