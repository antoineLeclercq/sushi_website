describe('Items Collection', function () {
  beforeEach(function () {
    this.items = new Items(itemsScaffold);
  });

  it('creates a collection of models with corresponding attributes', function () {
    var id = 1;

    expect(typeof this.items.get(id).get('name')).toBe('string');
    expect(this.items.get(id).toJSON()).toEqual(_.findWhere(itemsScaffold, { id: id }));
  });
});