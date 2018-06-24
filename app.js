const express = require("express");
const authRoutes = require("./routes/auth");
require("./config/passport-setup");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const app = express();

// mongodb connection
mongoose
    .connect(keys.mongodb.dbURI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// ejs setup
app.set("view engine", "ejs");

// routes setup
app.use("/auth", authRoutes);
app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3000, () => console.log("Server started on port 3000"));
