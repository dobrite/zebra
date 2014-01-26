define([
    'backbone',
    'backbone.marionette',
],
function (Backbone) {

    var App = new Backbone.Marionette.Application();

    App.addRegions({
        mainPane: "#main",
    });

    App.on("initialize:after", function () {
        require([
            "js/post_controller",
        ],
        function (PostController) {
            var postController = new PostController(App.mainPane);
        });
    });

    return App;
});
