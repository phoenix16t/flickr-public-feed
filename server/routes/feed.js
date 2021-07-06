const axios = require('axios');
var express = require('express');
var router = express.Router();

let oldResults = [];
let oldSearch = '';
let oldTimestamp = '';

router.get('/', function(req, res, next) {
  const newTimestamp = new Date();

  // if the same search ran less than 10 mins ago, return the cached results
  if (oldSearch === req.query.search && newTimestamp - oldTimestamp < 1000 * 60 * 10) {
    res.send(oldResults);
  }
  // otherwise query flickr and cache the results
  else {
    const tags = req.query.search.split(' ').join(',');
    axios.get(`https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=${tags}`)
      .then(function (response) {
        oldResults = response.data.items;
        oldSearch = req.query.search;
        oldTimestamp = new Date();
        res.send(oldResults);
      });
  }
});

module.exports = router;
