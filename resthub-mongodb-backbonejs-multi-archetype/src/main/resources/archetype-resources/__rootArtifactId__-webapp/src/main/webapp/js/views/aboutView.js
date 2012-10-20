define([ 'underscore', 'backbone', 'hbs!templates/about'
], function (_, Backbone, aboutTemplate) {
    
    var AboutView = Backbone.View.extend({

        initialize:function () {
            // Define view template
            this.template = aboutTemplate;
            // Render the view
            this.render();
        }

    });
    return AboutView;
});
