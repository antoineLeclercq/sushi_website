var CartView = Backbone.View.extend({
  el: $('#cart').get(0),
  template: App.templates.cart,
  events: {
    'click .empty_cart': 'emptyAndHide',
    'click .checkout': 'renderCheckout',
  },
  emptyAndHide: function (e) {
    e.preventDefault();

    this.$el.slideUp(300);
    this.updateItemsCount();
    this.collection.trigger('empty_cart');
  },
  render: function () {
    this.$el.html(this.template({ items: this.collection.toJSON() }));

    if (this.collection.length === 1 && this.collection.first().get('quantity') === 1) {
      this.$el.slideDown(300);
    } else {
      this.$el.show();
    }

    this.updateItemsCount();
  },
  updateItemsCount: function () {
    $('body > header .count').text(this.collection.length);
  },
  isEmpty: function () {
    return !this.collection.length;
  },
  renderCheckout: function (e) {
    e.preventDefault();

    this.$el.hide();
    $('#items').hide();
    new CheckoutView({ collection: this.collection });
  },
  initialize: function () {
    this.$el.hide();
    if (!this.isEmpty()) { this.render(); }
    this.listenTo(this.collection, 'update', this.render);
  },
});