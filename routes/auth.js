const router = require("express").Router();
const passport = require("passport");

// auth login
router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

// logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// google login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

// google redirect
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  // redirect user to profile page
  res.redirect("/profile");
});

module.exports = router;
