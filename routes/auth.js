const router = require("express").Router();
const passport = require("passport");

// auth login
router.get("/login", (req, res) => {
    res.render("login");
});

// logout
router.get("/logout", (req, res) => {
    res.send("logout");
});

// google login
router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile"]
    })
);

// google redirect
router.get("/google/redirect", (req, res) => {
    res.send("Google redirect URI");
});

module.exports = router;
