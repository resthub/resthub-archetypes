define(['underscore', 'backbone'], function(_, Backbone) {
  var SampleModel = Backbone.Model.extend({

    // Default attributes for the todo.
    defaults: {
      name: "empty name"
    },

    // Ensure that each sample created has `name`.
    initialize: function() {
      if (!this.get("name")) {
        this.set({"name": this.defaults.content});
      }
    },

    // Remove this Sample from *localStorage*.
    clear: function() {
      this.destroy();
    }

  });
  return SampleModel;
});
