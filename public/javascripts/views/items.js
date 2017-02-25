var ItemsView = Backbone.View.extend({
  el: $('#items').get(0),
  template: App.templates.items,
  events: {
    'click header': 'displayDetails',
    'click .add_cart': 'addToCart',
  },
  displayDetails: function (e) {
    var id = $(e.target).closest('li').attr('data-id');

    this.$el.hide();
    new ItemView({ model: this.collection.get(id)} );
  },
  addToCart: function (e) {
    e.preventDefault();
    var id = $(e.target).closest('li').attr('data-id');

    App.cart.addItem(this.collection.get(id));
  },
  render: function () {
    this.$el.html(this.template({ items: this.collection.toJSON() }));
  },
  initialize: function () {
    this.render();
  }
});