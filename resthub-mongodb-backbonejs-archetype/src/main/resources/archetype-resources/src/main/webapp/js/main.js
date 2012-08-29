// Set the require.js configuration for your application.
require.config({

    shim:{
        'underscore':{
            exports:'_'
        },
        'underscore.string':{
            deps:[
                'underscore'
            ]
        },
        'handlebars':{
            exports:'Handlebars'
        },
        'backbone-orig':{
            deps:[
                'underscore',
                'underscore.string',
                'jquery'
            ],
            exports:'Backbone'
        },
        'backbone-queryparams':{
            deps:[
                'backbone-orig',
                'underscore'
            ]
        },
        'backbone-paginator':{
            deps:[
                'backbone-orig',
                'underscore',
                'jquery'
            ],
            exports:'Backbone.Paginator'
        },
        async:{
            deps:[
                'underscore'
            ]
        }
    },

    // Libraries
    paths:{
        jquery:'libs/jquery',
        underscore:'libs/underscore',
        'underscore.string':'libs/underscore.string',
        'backbone-orig':'libs/backbone',
        'backbone':'resthub/backbone.ext',
        localstorage:'libs/localstorage',
        text:'libs/text',
        i18n:'libs/i18n',
        pubsub:'resthub/pubsub',
        'bootstrap':'libs/bootstrap',
        'backbone-validation':'libs/backbone-validation',
        'resthub-backbone-validation':'resthub/backbone-validation.ext',
        handlebars:'libs/handlebars',
        'resthub-handlebars':'resthub/handlebars-helpers',
        'backbone-queryparams':'libs/backbone.queryparams',
        'backbone-paginator':'libs/backbone.paginator',
        async:'libs/async.js',
        keymaster:'libs/keymaster',
        hbs:'resthub/handlebars-require'
    }
});

require(['router'], function (Router) {

    Router.initialize();
});