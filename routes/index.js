var express = require('express');
var router = express.Router();
var path = require('path');
var Menu = require(path.resolve(path.dirname(__dirname), 'node_modules/menu_manipulations.js'));

router.get('/', function(req, res, next) {
  res.render('index', {
    menuItems: Menu.get(),
  });
});

module.exports = router;
