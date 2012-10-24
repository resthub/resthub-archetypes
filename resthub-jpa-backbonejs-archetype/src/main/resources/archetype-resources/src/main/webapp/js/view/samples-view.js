define([ 'backbone', 'collection/samples', 'hbs!template/samples' ],
function (Backbone, Samples, samplesTemplate) {
    
    var SamplesView = Backbone.ResthubView.extend({
        
        // Define view template
        template: samplesTemplate,

        initialize:function () {
            // Initialize the collection
            this.collection = new Samples();
            
            // Render the view when the collection is retreived from the server
            this.collection.on('reset', this.render, this);
            
            // Request unpaginated URL
            this.collection.fetch({ data: { page: 'no'} });
        }

    });
    return SamplesView;
});