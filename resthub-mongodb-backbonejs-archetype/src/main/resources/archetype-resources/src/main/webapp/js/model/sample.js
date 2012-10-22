define(['underscore', 'backbone'], function(_, Backbone) {
  var SampleModel = Backbone.Model.extend({

    defaults: {
      name: "empty name"
    }

  });
  return SampleModel;
});
