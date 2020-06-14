const jwt = require("jsonwebtoken");

module.exports = {
  isAuthenticate: (req, res, next) => {
    let reqHeaders = req.headers ? req.headers.authorization.split(" ") : null;

    if (!reqHeaders) {
      res.status(403).json({
        msg: "authentication failed",
      });
      return;
    }

    const bear = reqHeaders[0];
    const token = reqHeaders[1];

    if (bear === "leon") {
      jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
          res.status(403).json({
            msg: "authentication failed",
          });
          return;
        }

        res.locals.auth = decoded;
        next();
      });
    } else {
      res.status(403).json({
        msg: "authentication failed",
      });
    }
  },
};
