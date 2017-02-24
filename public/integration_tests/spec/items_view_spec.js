describe('Items view', function () {
  beforeEach(function () {
    this.items = new Items(itemsScaffold);
    this.view = new ItemsView({ collection: this.items });
    $('<div id="items">').css('display', 'none').appendTo(document.body);
  });

  afterEach(function () {
    this.view.remove();
  });

  it('has a template and a collection', function () {
    expect(this.view.template).toBeDefined();
    expect(this.view.collection).toBeDefined();
  });

  it('renders the items in the collection', function () {
    expect(this.view.$el.find('li').length).toBe(this.items.length);
  })
});