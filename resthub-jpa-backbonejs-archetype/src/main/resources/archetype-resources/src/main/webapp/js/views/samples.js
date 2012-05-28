define([
  'underscore',
  'backbone',
  'collections/samples',
  'text!templates/samples.html'
  ], function(_, Backbone, Samples, templateSource){
  var SamplesView = Backbone.View.extend({
      
    // compile template
    template: _.template(templateSource),
        
    initialize: function(option) {
      _.bindAll(this, 'render');
      this.el = option.el;
      Samples.fetch({success: this.render});
    },

    render: function(model) {
      (this.el).html(this.template({samples: model.toJSON()}));
    }

  });
  return SamplesView;
});
