var ItemView = Backbone.View.extend({
  attributes: {
    id: 'item_details'
  },
  template: App.templates.item,
  events: {
    'click .close': 'destroy',
    'click .add_cart': 'addToCart',
    'click .nav': 'switchItem',
  },
  destroy: function (e) {
    e.preventDefault();

    this.parent.hide();
    this.$el.remove();
    App.itemsView.trigger('display');
  },
  addToCart: function (e) {
    e.preventDefault();

    App.cart.trigger('add_cart', this.model);
  },
  switchItem: function (e) {
    var $btn = $(e.target).closest('.nav');
    var id = this.model.get('id') % App.items.length;
    var $itemDetails = this.$el.find('section');
    var nextId;
    var item;
    var direction;

    if ($btn.hasClass('prev')) {
      nextId = id - 1 ? id - 1 % App.items.length : 1;
      direction = 'previous';
    } else {
      nextId = id + 1 ? id + 1 % App.items.length : 1;
      direction = 'next';
    }

    item = App.items.get(nextId);
    (new ItemView({ model: item })).render($itemDetails, direction);

    router.navigate('menu/' + nextId);
  },
  renderSwitch: function ($prev, direction) {
    var $current = this.$el.find('section');
    var duration = 50;

    this.$el.append($prev);

    if (direction === 'previous') {
      $current.css({ 'left': '', 'right': 0 });
      $prev.css({ 'left': 0, 'right': '' });
    } else if (direction === 'next') {
      $current.css({ 'left': 0, 'right': '' });
      $prev.css({ 'left': '', 'right': 0 });
    }

    $current.css('width', 0);

    App.$el.html(this.$el);

    $prev.animate({
      width: 0,
    }, 200, 'linear', function () {
      $(this).remove();
    });

    $current.animate({
      width: 1000
    }, 200, 'linear');
  },
  render: function ($previousItem, direction) {
    this.$el.html(this.template(this.model.toJSON()));

    if ($previousItem && direction) {
      this.renderSwitch($previousItem, direction);
    } else {
      App.$el.html(this.$el);
    }
  },
  initialize: function () {
    this.parent = $('#item_details');
  }
});