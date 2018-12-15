const express = require('express');
const axios = require('axios');

const router = express.Router();

const url = 'https://api.themoviedb.org/3/';
const key = '?api_key=6ac23abc8d5623a742214ffc539337c5';

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Header', 'Origin, X-Request-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
  next();
})

router.get('/popular/:type', async (req, res) => {
  try {
    if (req.params.type === 'movies') {
      const result = await axios.get(url+'movie/popular'+key).catch(err => { console.log(err) });
      res.json(result.data);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
