define([
    'backbone',
    "underscore",
    'js/post_collection',
    'js/post_composite_view',
    'js/waiting_item_view',
],
function (Backbone, _, PostCollection, PostCompositeView, WaitingItemView) {

    var PostController = Backbone.Marionette.Controller.extend({

        initialize: function (region) {
            var postCollection = new PostCollection();

            postCollection.fetch().done(function () {
                var postCompositeView = new PostCompositeView({
                    collection: postCollection
                });

                region.show(postCompositeView);
            });

            region.show(new WaitingItemView());
        },
    });

    return PostController;
});
