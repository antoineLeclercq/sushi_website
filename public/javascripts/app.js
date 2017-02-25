App = {
  templates: JST,
  init: function () {
    this.renderItems();
    this.renderCart();

    $(window).on('unload', this.updateStorage.bind(this));
  },
  renderItems: function () {
    this.itemsView = new ItemsView({ collection: this.items });
  },
  renderCart: function () {
    App.cart = new Cart(this.readStorage());
    App.cartView = new CartView({ collection: App.cart });
  },
  readStorage: function () {
    return JSON.parse(localStorage.getItem('cartItems'));
  },
  updateStorage: function () {
    localStorage.setItem('cartItems', JSON.stringify(this.cart.toJSON()));
  },
};

Handlebars.registerHelper('format_price', function (price) {
  return Number(price).toFixed(2);
});

Handlebars.registerHelper('convert_to_kcal', function (energy) {
  return Number(energy) * 0.239006;
});

Handlebars.registerHelper('total', function (items) {
  return items.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0).toFixed(2);
});