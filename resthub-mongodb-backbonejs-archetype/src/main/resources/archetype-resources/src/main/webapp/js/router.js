define(['backbone', 'views/about', 'views/samples'], function(Backbone, AboutView, SamplesView){
	var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'about': 'about'
        },
        home: function( ){
             new SamplesView({el: $('#main')});
        },
        about: function( ){
            new AboutView({el: $('#main')});
        }
    });
    
    return AppRouter;
});