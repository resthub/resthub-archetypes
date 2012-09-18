define([
    'underscore',
    'backbone',
    'collections/samples',
    'hbs!templates/samples.html',
    'backbone-paginator'
], function (_, Backbone, Samples, sampleTemplate) {
    var SamplesView = Backbone.View.extend({

        initialize:function (options) {
            _.bindAll(this, 'render');

            this.$root = options.root;
            this.$root.html(this.$el);

            Samples.fetch({success:this.render});
        },

        render:function (collection) {
            this.$el.html(sampleTemplate({samples:collection.toJSON()}));
        }

    });
    return SamplesView;
});
