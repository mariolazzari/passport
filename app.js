const express = require("express");
const authRoutes = require("./routes/auth");
const passportSetup = require("./config/passport-setup");

const app = express();

// ejs setup
app.set("view engine", "ejs");

// routes setup
app.use("/auth", authRoutes);
app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3000, () => console.log("Server started on port 3000"));
