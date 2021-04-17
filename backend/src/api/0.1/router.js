// API router
const express = require('express');

// Get routes
// const type = require('./trashcanType/trashcanType.routes');
// const news = require('./trashcan/trashcan.routes');
const user = require('./user/user.routes');
const auth = require('./auth/auth.routes');
const type = require('./type/type.routes');
const news = require('./news/news.routes');

// Invoke API router
const router = express.Router();

// Mount the routes
// router.use('/type', type);
// router.use('/news', news);
router.use('/user', user);
router.use('/auth', auth);
router.use('/type', type);
router.use('/news', news);

// Generic response for /api
router.get('/', (req, res) => {
  res.json({
    message: 'API',
  });
});

// export the  router so it can be mounted in index.js
module.exports = router;
