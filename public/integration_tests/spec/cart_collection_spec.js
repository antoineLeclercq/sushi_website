describe('Cart Collection', function () {
  beforeEach(function () {
    this.cart = new Cart();
    this.items = new Items(itemsScaffold);
  });

  it('can add cart items', function () {
    this.items.each(function (item) {
      this.cart.addItem(item);
    }, this);

    expect(this.cart.length).toEqual(this.items.length);
    expect(this.cart.first().get('price')).toEqual(this.items.first().get('price'));
  });

  it('can check if it\s empty', function () {
    expect(this.cart.isEmpty()).toBe(true);
    this.cart.addItem(this.items.first());
    expect(this.cart.isEmpty()).toBe(false);
  });

  it('can update the quantity of an item in the cart', function () {
    this.cart.addItem(this.items.first());
    expect(this.cart.first().get('quantity')).toBe(1);
    this.cart.addItem(this.items.first());
    expect(this.cart.first().get('quantity')).toBe(2);
  });
});