define([ 'underscore', 'backbone', 'collections/samples', 'hbs!templates/samples'
], function (_, Backbone, Samples, samplesTemplate) {
    var SamplesView = Backbone.View.extend({

        initialize:function () {
            this.template = samplesTemplate;
            this.collection = new Samples();
            _.bindAll(this);
            // Request unpaginated URL
            this.collection.fetch({ data: { page: 'no'}, success: this.update});
        },

        update: function() {
            this.render();
        }

    });
    return SamplesView;
});
