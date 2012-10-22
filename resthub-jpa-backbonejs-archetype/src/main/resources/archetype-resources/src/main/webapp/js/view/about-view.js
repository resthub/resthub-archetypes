define([ 'underscore', 'backbone', 'hbs!template/about'
], function (_, Backbone, aboutTemplate) {
    
    var AboutView = Backbone.ResthubView.extend({

        initialize:function () {
            // Define view template
            this.template = aboutTemplate;
            // Render the view
            this.render();
        }

    });
    return AboutView;
});
