App = {
  $el: $('#content'),
  templates: JST,
  menuView: function () {
    this.renderItems();
    this.renderCart();
  },
  itemView: function (id) {
    this.renderCart();
    (new ItemView({ model: this.items.get(id) })).render();
  },
  renderItems: function () {
    new ItemsView({ collection: this.items });
  },
  checkoutView: function () {
    $('#cart').hide();
    new CheckoutView({ collection: this.cart });
  },
  renderCart: function () {
    this.cartView.render();
  },
  readStorage: function () {
    return JSON.parse(localStorage.getItem('cartItems'));
  },
  updateStorage: function () {
    localStorage.setItem('cartItems', JSON.stringify(this.cart.toJSON()));
  },
};

$(window).on('unload', App.updateStorage.bind(App));

Handlebars.registerHelper('format_price', function (price) {
  return Number(price).toFixed(2);
});

Handlebars.registerHelper('convert_to_kcal', function (energy) {
  return (Number(energy) * 0.239006).toFixed(4);
});

Handlebars.registerHelper('total', function (items) {
  return items.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0).toFixed(2);
});