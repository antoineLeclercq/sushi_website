describe('Item model', function () {
  beforeEach(function () {
    this.item = new Item(itemsScaffold[0]);
  });

  it('creates a new model with specified attributes', function () {
    expect(typeof this.item.get('name')).toBe('string');
    expect(this.item.toJSON()).toEqual(itemsScaffold[0]);
  });
});