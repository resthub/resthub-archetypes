define([ 'backbone', 'resthub', 'hbs!template/about'],
function (Backbone, Resthub, aboutTemplate) {
    
    var AboutView = Resthub.View.extend({
        
        // Define view template
        template: aboutTemplate,
        
        initialize:function () {
            // Render the view
            this.render();
        }

    });
    return AboutView;
});