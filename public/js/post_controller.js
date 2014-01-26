define([
    'backbone',
    'js/post_collection',
    'js/post_collection_view',
],
function (Backbone, PostCollection, PostCollectionView) {

    var PostController = Backbone.Marionette.Controller.extend({

        initialize: function (mainRegion) {
            var postCollection = new PostCollection();

            postCollectionView = new PostCollectionView({
                collection: postCollection
            });

            postCollection.fetch();

            mainRegion.show(postCollectionView);
        }

    });

    return PostController;
});
