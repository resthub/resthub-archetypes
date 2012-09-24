define([ 'underscore', 'backbone', 'hbs!templates/about'
], function (_, Backbone, aboutTemplate) {
    
    var AboutView = Backbone.View.extend({

        initialize:function () {
            this.template = aboutTemplate;
            _.bindAll(this, 'render');
            this.render();
        }

    });
    return AboutView;
});
