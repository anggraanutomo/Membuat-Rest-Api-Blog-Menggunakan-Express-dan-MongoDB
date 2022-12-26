const express = require('express');
const router = express.Router();

router.get('/blogposts', (req, res) => {
  res.send('All Blogposts');
});

router.post('/blogposts', (req, res) => {
  console.log(req.body);
  res.send("create a post");
});

module.exports = router;