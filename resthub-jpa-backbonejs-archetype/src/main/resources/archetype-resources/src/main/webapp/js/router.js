define(['backbone', 'views/about', 'views/samples', 'backbone-queryparams'], function (Backbone, AboutView, SamplesView) {
    var AppRouter = Backbone.Router.extend({
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

    var initialize = function () {
        new AppRouter;
        Backbone.history.start();

    };
    return {
        initialize:initialize
    };
});