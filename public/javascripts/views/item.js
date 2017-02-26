var ItemView = Backbone.View.extend({
  tagName: 'div',
  template: App.templates.item,
  events: {
    'click .close': 'destroy',
    'click .add_cart': 'addToCart',
  },
  destroy: function (e) {
    e.preventDefault();

    this.parent.hide();
    this.$el.remove();
    App.itemsView.trigger('display');
  },
  addToCart: function (e) {
    e.preventDefault();

    App.cart.trigger('add_cart', this.model);
  },
  render: function () {
    this.parent.show();
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo($('#item_details'));
  },
  initialize: function () {
    this.parent = $('#item_details');
    this.render();
  }
});