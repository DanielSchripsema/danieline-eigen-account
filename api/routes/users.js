const express = require('express');

const router = express.Router();

const { db } = require('../services/database');

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await db.collection('users').find().toArray();
  res.json(users);
});

router.post('/', (req, res) => {
  db.collection('users').insertOne(req.body)
    .then((user) => res.status(201).json({ id: user.insertedId }))
    .catch((err) => res.status(500).json(err));
});

router.get('/slow', (req, res, next) => {
  setTimeout(() => {
    res.send('Slowly respond with a resource');
  }, 3000);
});

module.exports = router;