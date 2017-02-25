var Cart = Backbone.Collection.extend({
  addItem: function (item) {
    var cartItem = {
      id: item.get('id'),
      image: item.get('image'),
      price: item.get('price'),
    };

    cartItem.quantity = this.updateQuantity(cartItem.id);
    this.add(cartItem, { merge: true });
  },
  updateQuantity: function (id) {
    var item = this.get(id);

    if (item) { return item.get('quantity') + 1; }

    return 1;
  },
  isEmpty: function () {
    return !this.length;
  },
});