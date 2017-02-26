describe('Checkout View', function () {
  beforeEach(function () {
    this.items = new Items(itemsScaffold);
    this.cart = new Cart();
    this.view = new CheckoutView({ collection: this.cart });
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
    this.view.render();
    expect(this.view.$el.find('tbody tr').length).toBe(this.items.length);
  });

  it('updates the qunatity of items', function () {
    this.cart.addItem(this.items.first());
    this.view.render();
    expect(this.view.$el.find('tbody tr p').text()).toEqual('1');
    this.view.$el.find('.fa-plus').trigger('click');
    expect(this.view.$el.find('tbody tr p').text()).toEqual('2');
    this.view.$el.find('.fa-minus').trigger('click');
    expect(this.view.$el.find('tbody tr p').text()).toEqual('1');
    this.view.$el.find('.fa-minus').trigger('click');
    expect(this.view.$el.find('tbody tr').length).toBe(0);
  });
});