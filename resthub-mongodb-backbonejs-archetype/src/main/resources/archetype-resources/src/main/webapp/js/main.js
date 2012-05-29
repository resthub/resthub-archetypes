// Set the require.js configuration for your application.
require.config({
  paths: {
    'jquery': 'libs/jquery',
    'underscore': 'libs/underscore',
    'backbone': 'libs/backbone',
    'text': 'libs/text'
  }
});

// Load our app module and pass it to our definition function
require(['jquery', 'router'] , function($, AppRouter) {   
    new AppRouter;
    Backbone.history.start();
});