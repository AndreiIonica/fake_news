const express = require('express');
const Type = require('./type.model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await Type.query().select('*').where('deleted_at', null);

    res.json(users);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
