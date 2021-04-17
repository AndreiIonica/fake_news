const express = require('express');
const User = require('./user.model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const fields = ['username', 'role', 'id'];

    const users = await User.query().select(fields).where('deleted_at', null);

    res.json(users);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
