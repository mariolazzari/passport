const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");

passport.use(
    new GoogleStrategy(
        {
            // strategy option
            callbackURL: "/auth/google/redirect",
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret
        },
        () => {
            // passport cb fx
        }
    )
);
