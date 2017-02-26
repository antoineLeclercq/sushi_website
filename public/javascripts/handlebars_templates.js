this["JST"] = this["JST"] || {};

this["JST"]["cart"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n<figure>\n<img src=\"/images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n</figure>\n<p>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + " x $"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p>\n</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n<section>\n<h3>Your<br>shopping cart</h3>\n<p class=\"total\">$"
    + container.escapeExpression((helpers.total || (depth0 && depth0.total) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"total","hash":{},"data":data}))
    + "<p>\n<footer>\n<a class=\"left empty_cart\" href=\"#\">Empty cart</a><!--\n--><a class=\"right checkout\" href=\"/checkout\">Checkout</a>\n</footer>\n</section>\n";
},"useData":true});

this["JST"]["checkout"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n<td><img src=\"/images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\"></td>\n<td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n<td>\n<span class=\"quantity_modifier\">\n<i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n</span>\n<p>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</p>\n<span class=\"quantity_modifier\">\n<i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n</span>\n</td>\n<td>$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</td>\n</tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"img_top\"></div>\n<section>\n<h1>Order Details</h1>\n<table>\n<thead>\n<tr>\n<th>Item</th>\n<th></th>\n<th>Quantity</th>\n<th>Price</th>\n</tr>\n</thead>\n<tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody>\n</table>\n<p>Total: <span class=\"total\">$"
    + container.escapeExpression((helpers.total || (depth0 && depth0.total) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"total","hash":{},"data":data}))
    + "</span></p>\n<footer>\n<a href=\"/\">Cancel order</a>\n<form action=\"/\" method=\"post\">\n<input type=\"submit\" value=\"ORDER NOW!\">\n</form>\n</footer>\n</section>\n<div class=\"img_bottom\"></div>\n";
},"useData":true});

this["JST"]["item"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr>\n<td>Protein</td>\n<td>"
    + alias4(((helper = (helper = helpers.protein || (depth0 != null ? depth0.protein : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"protein","hash":{},"data":data}) : helper)))
    + "</td>\n</tr>\n<tr>\n<td>Fat (total)</td>\n<td>"
    + alias4(((helper = (helper = helpers.fat || (depth0 != null ? depth0.fat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fat","hash":{},"data":data}) : helper)))
    + "</td>\n</tr>\n<tr>\n<td>Carbohydrate</td>\n<td>"
    + alias4(((helper = (helper = helpers.carbohydrate || (depth0 != null ? depth0.carbohydrate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"carbohydrate","hash":{},"data":data}) : helper)))
    + "</td>\n</tr>\n<tr>\n<td>Energy (kj)</td>\n<td>"
    + alias4(((helper = (helper = helpers.energy || (depth0 != null ? depth0.energy : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"energy","hash":{},"data":data}) : helper)))
    + "</td>\n</tr>\n<tr>\n<td>Energy (kcal)</td>\n<td>"
    + alias4((helpers.convert_to_kcal || (depth0 && depth0.convert_to_kcal) || alias2).call(alias1,(depth0 != null ? depth0.energy : depth0),{"name":"convert_to_kcal","hash":{},"data":data}))
    + "</td>\n</tr>\n<tr>\n<td>Sugar</td>\n<td>"
    + alias4(((helper = (helper = helpers.sugar || (depth0 != null ? depth0.sugar : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sugar","hash":{},"data":data}) : helper)))
    + "</td>\n</tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section>\n<div class=\"nav prev\">\n<img src=\"/images/nav-prev.png\">\n</div>\n<figure>\n<img src=\"/images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n</figure>\n<article>\n<a class=\"close\" href=\"/\">+</a>\n<h1>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n<p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n<footer>\n<h2>$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</h2>\n<a class=\"add_cart\" href=\"#\">Add to cart</a>\n</footer>\n</article>\n<aside>\n<h3>Nutritional Information</h3>\n<table>\n<tbody>\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.stats : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tobdy>\n</table>\n</aside>\n<div class=\"nav next\">\n<img src=\"/images/nav-next.png\">\n</div>\n</section>\n";
},"useData":true});

this["JST"]["items"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n<article>\n<header>\n<figure>\n<img src=\"images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n</figure>\n<h2 class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n</header>\n<p class=\"price\">$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p>\n<footer>\n<a href=\"#\" class=\"add_cart\">Add to cart</a>\n</footer>\n</article>\n</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});