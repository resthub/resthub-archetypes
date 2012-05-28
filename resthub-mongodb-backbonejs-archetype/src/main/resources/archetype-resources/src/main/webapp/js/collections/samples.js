define(['backbone', 'models/sample'], function(Backbone, Sample){
 
    var SamplesCollection = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Sample,

        // URL of the 
        url: "api/sample"

  });
  return new SamplesCollection;
});
