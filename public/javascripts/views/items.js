var ItemsView = Backbone.View.extend({
  tagName: 'ul',
  attributes: {
    id: 'items'
  },
  template: App.templates.items,
  events: {
    'click header': 'displayDetails',
    'click footer': 'addToCart',
  },
  displayDetails: function (e) {
    var id = $(e.target).closest('li').attr('data-id');

    router.navigate('menu/' + id, { trigger: true });
    new ItemView({ model: this.collection.get(id)} );
    this.remove();
  },
  addToCart: function (e) {
    e.preventDefault();
    var id = $(e.target).closest('li').attr('data-id');

    App.cart.addItem(this.collection.get(id));
  },
  render: function () {
    this.$el.html(this.template({ items: this.collection.toJSON() }));
    App.$el.html(this.$el);
  },
  initialize: function () {
    this.render();
  }
});