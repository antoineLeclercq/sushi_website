var express = require('express');
var router = express.Router();
var path = require('path');
var Menu = require(path.resolve(path.dirname(__dirname), 'node_modules/menu_manipulations.js'));

router.get('/checkout', function(req, res, next) {
  res.render('checkout', {
    menuItems: Menu.get(),
  });
});

module.exports = router;
