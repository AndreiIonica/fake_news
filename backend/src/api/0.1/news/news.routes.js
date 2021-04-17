const express = require('express');
const { getLinkPreview } = require('link-preview-js');

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
    let news = req.body;
    const preview = await getLinkPreview(news.link);

    news.title = preview.title;
    news.description = preview.title;
    news.image = preview.images[0];
    console.log(news);

    const inserted = await News.query().insert(news);

    res.json(inserted);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
