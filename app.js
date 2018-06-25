const express = require("express");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
require("./config/passport-setup");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const app = express();
const cookieSession = require("cookie-session");
const passport = require("passport");

// mongodb connection
mongoose
    .connect(keys.mongodb.dbURI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// ejs setup
app.set("view engine", "ejs");

// setup cookie session
app.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: [keys.session.cookieKey]
    })
);

// passport configuration
app.use(passport.initialize());
app.use(passport.session());

// routes setup
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.get("/", (req, res) => {
    res.render("home", { user: req.user });
});

app.listen(3000, () => console.log("Server started on port 3000"));
