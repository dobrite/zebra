require.config({
    baseUrl: "../",

    deps: [
        'js/main',
    ],

    shim: {
        underscore: {
            exports: '_',
        },
        backbone: {
            deps: [
                'underscore',
                'jquery',
            ],
            exports: 'Backbone',
        },
    },

    paths: {
        jquery: 'bower_components/jquery/jquery',
        backbone: 'bower_components/backbone/backbone',
        underscore: 'bower_components/underscore/underscore',

        'backbone.marionette': 'bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': 'bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': 'bower_components/backbone.babysitter/lib/amd/backbone.babysitter',

        text: 'bower_components/requirejs-text/text',
        templates: 'templates',

        i18nprecompile: 'bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        json2: 'bower_components/require-handlebars-plugin/hbs/json2',
        hbs: 'bower_components/require-handlebars-plugin/hbs',
    },

    hbs: {
        disableI18n: true,
        helperPathCallback: function(name) {return 'templates/helpers/' + name;}
    }
});
