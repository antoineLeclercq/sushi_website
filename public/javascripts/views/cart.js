var CartView = Backbone.View.extend({
  el: $('#cart').get(0),
  template: App.templates.cart,
  events: {
    'click .empty_cart': 'emptyAndHide',
    'click .checkout': 'renderCheckout',
  },
  emptyAndHide: function (e) {
    e.preventDefault();

    this.$el.slideUp(300, function () {
      this.$el.empty();
    }.bind(this));

    this.collection.trigger('empty_cart');
    this.updateItemsCount();
  },
  render: function () {
    if (this.isEmpty()) {
      this.$el.hide();
      return;
    }

    if (this.$el.children().length === 0) {
      this.$el.slideDown(300);
    } else {
      this.$el.show();
    }

    this.$el.html(this.template({ items: this.collection.toJSON() }));

    this.updateItemsCount();
  },
  updateItemsCount: function () {
    $('body > header .count').text(this.collection.length);
  },
  isEmpty: function () {
    return this.collection.length === 0;
  },
  renderCheckout: function (e) {
    e.preventDefault();

    this.$el.hide();
    new CheckoutView({ collection: this.collection });
  },
  initialize: function () {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },
});