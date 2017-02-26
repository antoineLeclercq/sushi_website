var express = require('express');
var router = express.Router();
var path = require('path');
var Menu = require(path.resolve(path.dirname(__dirname), 'node_modules/menu_manipulations.js'));

router.get('/', function(req, res, next) {
  res.render('menu', {
    menuItems: Menu.get(),
  });
});

router.get('/menu', function(req, res, next) {
  res.render('menu', {
    menuItems: Menu.get(),
  });
});

module.exports = router;
