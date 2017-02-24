var express = require('express');
var router = express.Router();
var path = require('path');
var Menu = require(path.resolve(path.dirname(__dirname), 'node_modules/menu_manipulations.js'));

router.get('/menu_items.json', function(req, res, next) {
  res.send(Menu.get());
});

router.get('/menu/:id', function(req, res, next) {
  var menu_item = Menu.getItem(req.params.id);

  res.send(menu_item);
});

module.exports = router;
