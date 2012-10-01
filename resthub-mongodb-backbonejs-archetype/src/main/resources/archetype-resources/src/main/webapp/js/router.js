define(['backbone', 'views/aboutView', 'views/samplesView', 'backbone-queryparams'], function (Backbone, AboutView, SamplesView) {
    var AppRouter = Backbone.Router.extend({

        initialize: function() {
            Backbone.history.start({ pushState: true, root: "/" });
        },

        routes:{
            '':'home',
            'home':'home',
            'about':'about'
        },

        home:function () {
            new SamplesView({root:$('#main')});
        },
        about:function () {
            new AboutView({root:$('#main')});
        }
        
    });

    return AppRouter;

});