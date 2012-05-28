define([
  'underscore',
  'backbone',
  'text!templates/about.html'
  ], function(_, Backbone, templateSource){
  var AboutView = Backbone.View.extend({
      
    // compile template
    template: _.template(templateSource),

    initialize: function(option) {
      _.bindAll(this, 'render');
      this.el = option.el;
      this.render();
    },

    render: function(model) {
      (this.el).html(this.template());
    }

  });
  return AboutView;
});
