var Router = Backbone.Router.extend({
  routes: {
    'menu': 'menuView',
    'menu/:id': 'itemView',
    'checkout': App.checkoutView,
  },
  itemView: function (id) {
    App.itemView(id);
  },
  menuView: function () {
    App.menuView();
    this.navigate('menu');
  },
  initialize: function () {
    this.route(/^\/?$/, 'menu', this.menuView);
  },
});

var router = new Router();

Backbone.history.start({pushState: true})

$(document).on('click', 'a[href^="/"]', function (e) {
  e.preventDefault();

  router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
});