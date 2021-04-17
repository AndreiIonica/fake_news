const express = require('express');
const News = require('./news.model');

const router = express.Router();

const { isLoggedIn } = require('../../../lib/jwt');

router.get('/', async (req, res, next) => {
  try {
    const news = await News.query().select('*').where('deleted_at', null);

    res.json(news);
  } catch (e) {
    next(e);
  }
});

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    req.body.user_id = req.auth_data.id;
    const news = await News.query().insert(req.body);

    res.json(news);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
