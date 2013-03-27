define([ 'backbone', 'resthub', 'collection/samples', 'hbs!template/samples' ],
function (Backbone, Resthub, Samples, samplesTemplate) {
    
    var SamplesView = Resthub.View.extend({
        
        // Define view template
        template: samplesTemplate,

        initialize:function () {
            // Initialize the collection
            this.collection = new Samples();
            
            // Render the view when the collection is retreived from the server
            this.listenTo(this.collection, 'sync', this.render);
            
            // Request unpaginated URL
            this.collection.fetch({ data: { page: 'no'} });
        }

    });
    return SamplesView;
});