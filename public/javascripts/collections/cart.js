var Cart = Backbone.Collection.extend({
  addItem: function (item) {
    var cartItem = {
      id: item.get('id'),
      name: item.get('name'),
      image: item.get('image'),
      price: item.get('price'),
    };

    cartItem.quantity = this.setQuantity(cartItem.id);
    this.add(cartItem, { merge: true });
  },
  setQuantity: function (id) {
    var item = this.get(id);

    if (item) { return item.get('quantity') + 1; }

    return 1;
  },
  updateQuantity: function (data) {
    var item = this.get(data.id);

    if (data.quantity <= 0) {
      this.remove(item);
    }

    item.set('quantity', data.quantity);
  },
  isEmpty: function () {
    return !this.length;
  },
  initialize: function () {
    this.on('empty_cart', this.reset);
    this.on('add_cart', this.addItem);
    this.on('update_quantity', this.updateQuantity);
  }
});