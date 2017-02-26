var path = require('path');
var request = require('request');
var root = 'http://localhost:3000'
var Menu = require(path.resolve(path.dirname(__dirname), 'node_modules/menu_manipulations.js'));

describe('/menu_items.json', function () {
  it('sends the menu items contained in /data', function (done) {
    request(root + '/menu_items.json', function (error, response, body) {
      var menuItems = JSON.parse(body);

      expect(menuItems[0].name).toBeDefined();
      expect(menuItems).toEqual(Menu.get());
      done();
    });
  });
});

describe('menu/:id.json', function () {
  it('sends the menu item with the id sent as param', function (done) {
    var id = 1;

    request(root + '/menu/' + id + '/json', function (error, response, body) {
      var item = JSON.parse(body);

      expect(item.name).toBeDefined();
      expect(item).toEqual(Menu.getItem(id));
      done();
    });
  });
});