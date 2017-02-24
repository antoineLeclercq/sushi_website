describe('Item View', function () {
  beforeEach(function () {
    this.item = new Item(itemsScaffold[0]);
    this.view = new ItemView({ model: this.item });
    $('<div id="item_details">').css('display', 'none').appendTo(document.body);
  });

  afterEach(function () {
    this.view.remove();
  });

  it('has a template and a model', function () {
    expect(this.view.template).toBeDefined();
    expect(this.view.model).toBeDefined();
  });

  it('renders the item attributes', function () {
    expect(this.view.$el.find('h1').text()).toBe(this.item.get('name'));
    expect(this.view.$el.find('tr').length).toBe(_.keys(this.item.get('stats')).length + 1);
  })
});