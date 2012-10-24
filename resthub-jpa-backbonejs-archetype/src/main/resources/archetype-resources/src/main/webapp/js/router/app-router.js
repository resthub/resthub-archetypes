define(['backbone', 'view/about-view', 'view/samples-view'],
function (Backbone, AboutView, SamplesView) {
    
    var AppRouter = Backbone.Router.extend({

        initialize: function() {
            Backbone.history.start({ pushState: true, root: "/" });
        },

        routes:{
            '': 'home',
            'home': 'home',
            'about': 'about'
        },

        home:function () {
            new SamplesView({ root: $('#main') });
        },
        about:function () {
            new AboutView({ root: $('#main') });
        }
        
    });

    return AppRouter;

});