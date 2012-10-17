define([ 'underscore', 'backbone', 'collections/samples', 'hbs!templates/samples'
], function (_, Backbone, Samples, samplesTemplate) {
    var SamplesView = Backbone.ResthubView.extend({

        initialize:function () {
            // Define view template
            this.template = samplesTemplate;
            // Initialize the collection
            this.collection = new Samples();
            // Render the view when the collection is retreived from the server
            this.collection.on('reset', this.render, this)
            // Request unpaginated URL
            this.collection.fetch({ data: { page: 'no'} });
        }

    });
    return SamplesView;
});
