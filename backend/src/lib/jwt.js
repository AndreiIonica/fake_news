const jwt = require('jsonwebtoken');

function sign(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.NODE_ENV === 'production' ? '1h' : '1y'
      },
      (err, token) => {
        if (err) reject(err);
        return resolve(token);
      }
    );
  });
}

// this is a express middleware
function isLoggedIn(req, res, next) {
  try {
    const user = jwt.verify(req.header('auth-token'), process.env.JWT_SECRET);
    req.auth_data = user;
    next();
  } catch (e) {
    next(e);
  }
}

module.exports = {
  sign,
  isLoggedIn
};
