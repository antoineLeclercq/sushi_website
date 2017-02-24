var ItemView = Backbone.View.extend({
  tagName: 'article',
  template: App.templates.item,
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    $('#item_details').html(this.$el);
  },
  initialize: function () {
    this.render();
  }
});