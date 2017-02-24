var ItemsView = Backbone.View.extend({
  el: $('#items').get(0),
  template: App.templates.items,
  render: function () {
    this.$el.html(this.template({ items: this.collection.toJSON() }));
  },
  initialize: function () {
    this.render();
  }
});