var CheckoutView = Backbone.View.extend({
  el: $('#checkout').get(0),
  events: {
    'click .fa': 'updateQuantity',
  },
  template: App.templates.checkout,
  updateQuantity: function (e) {
    var $target = $(e.target);
    var id = $target.closest('tr').attr('data-id');
    var item = this.collection.get(id);
    var newQuantity;

    if ($target.hasClass('fa-plus')) {
      newQuantity = item.get('quantity') + 1;
    } else {
      newQuantity = item.get('quantity') - 1;
    }

    this.collection.trigger('update_quantity', { id: id, quantity: newQuantity });
    this.render();
  },
  render: function () {
    this.$el.html(this.template({ items: this.collection.toJSON() }));
    this.$el.show();
  },
  initialize: function () {
    this.render();
  },
});