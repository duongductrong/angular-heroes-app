const jwt = require("jsonwebtoken");
const express = require("express");
const Authenticate = require("../validate/authenticate.validate");
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    let payload = { username: "admin", password: "admin" };
    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: "10h" },
      (err, token) => {
        if (err) {
          res.status(400).json({
            msg: "The token failed, please try again",
          });
          return;
        }

        res.status(200).json({
          msg: "Successfully sign in",
          token,
        });
      }
    );
  } else {
    res.status(400).json({
      msg: "Username or password is wrong !",
    });
  }
});

router.post("/authenticate", Authenticate.isAuthenticate, (_, res) => {
  const { id, name, damage } = res.locals;
  res.status(200).json({
    msg: "Successfully auth",
    hero: { id, name, damage },
  });
});

module.exports = router;
