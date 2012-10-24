define(['backbone'], function(Backbone) {
    var SampleModel = Backbone.Model.extend({

        defaults: {
            name: "empty name"
        }

    });
    return SampleModel;
});