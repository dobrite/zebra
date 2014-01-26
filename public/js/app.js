define([
    'backbone',
    'js/main_layout',
    'backbone.marionette',
],
function (Backbone, MainLayout) {

    var App = new Backbone.Marionette.Application();

    App.addRegions({
        mainPane: "#main",
    });

    var mainLayout = new MainLayout();

    App.mainPane.show(mainLayout);

    App.on("initialize:after", function () {
        require([
            "js/post_controller",
        ],
        function (PostController) {
            var postController = new PostController(mainLayout.postsRegion);
        });
    });

    return App;
});
