define([ 'backbone', 'hbs!template/about'],
function (Backbone, aboutTemplate) {
    
    var AboutView = Backbone.ResthubView.extend({
        
        // Define view template
        template: aboutTemplate,
        
        initialize:function () {
            // Render the view
            this.render();
        }

    });
    return AboutView;
});