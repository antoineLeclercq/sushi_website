var ItemView = Backbone.View.extend({
  tagName: 'article',
  template: App.templates.item,
  events: {
    'click .close': 'destroy',
    'click .add_cart': 'addToCart',
  },
  destroy: function (e) {
    e.preventDefault();
    App.itemsView.$el.show();
    this.$el.remove();
  },
  addToCart: function (e) {
    e.preventDefault();
    App.cart.addItem(this.model);
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo($('#item_details'));
  },
  initialize: function () {
    this.render();
  }
});