const express = require('express');

const router = express.Router();
const { db } = require('../services/database');

/* GET users listing. */
router.get('/', async (req, res) => {
  res.render('index', { title: 'Express' });
  const users = await db.collection('users').find().toArray();
  res.json(users);
});
// /* GET home page. */
// router.get('/', (req, res) => {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
