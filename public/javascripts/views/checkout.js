var CheckoutView = Backbone.View.extend({
  attributes: {
    id: 'checkout',
  },
  events: {
    'click .fa': 'updateQuantity',
    'click footer a': 'reset',
    'submit footer form': 'reset',
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
  reset: function () {
    this.collection.trigger('empty_cart');
  },
  render: function () {
    this.$el.html(this.template({ items: this.collection.toJSON() }));
    App.$el.html(this.$el);
    this.delegateEvents();
  },
  initialize: function () {
    this.render();
  },
});