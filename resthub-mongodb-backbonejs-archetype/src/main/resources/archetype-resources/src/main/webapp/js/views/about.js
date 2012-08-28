define([
    'underscore',
    'resthub-backbone',
    'text!templates/about.html'
], function (_, Backbone, templateSource) {
    var AboutView = Backbone.View.extend({

        // compile template
        template:_.template(templateSource),

        initialize:function (options) {
            _.bindAll(this, 'render');

            this.$root = options.root;
            this.$root.html(this.$el);

            this.render();
        },

        render:function () {
            this.$el.html(this.template());
        }

    });
    return AboutView;
});
