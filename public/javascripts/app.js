App = {
  templates: JST,
  init: function () {
    this.renderItems();
  },
  renderItems: function () {
    this.itemsView = new ItemsView({ collection: this.items });
  }
};

Handlebars.registerHelper('format_price', function (price) {
  return Number(price).toFixed(2);
});

Handlebars.registerHelper('convert_to_kcal', function (energy) {
  return Number(energy) * 0.239006;
});