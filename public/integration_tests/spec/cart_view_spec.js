describe('Cart View', function () {
  beforeEach(function () {
    $('<div id="items">').appendTo(document.body);
    this.items = new Items(itemsScaffold);
    this.cart = new Cart();
    this.view = new CartView({ collection: this.cart });
  });

  afterEach(function () {
    this.view.remove();
  });

  it('has a template and a collection', function () {
    expect(this.view.template).toBeDefined();
    expect(this.view.collection).toBeDefined();
  });

  it('renders the items in the cart collection', function () {
    this.cart.set(this.items.models);
    expect(this.view.$el.find('li').length).toBe(this.items.length);
  });

  it('updates the count of items displayed', function () {
    var $temp = $('<header><p class="count">').appendTo(document.body);

    this.cart.addItem(this.items.first());
    expect($temp.find('.count').text()).toEqual('1');
    this.cart.addItem(this.items.last());
    expect($temp.find('.count').text()).toEqual('2');

    $temp.remove();
  })

  it('computes the total price of the cart', function () {
    this.items.each(function (item) {
      this.cart.addItem(item);
    }, this);

    total = this.cart.reduce(function (total, item) { return total + item.get('quantity') * item.get('price'); }, 0);

    expect(Number(this.view.$el.find('.total').text().match(/(\d+\.\d{2})/).pop())).toEqual(total);
  });
});