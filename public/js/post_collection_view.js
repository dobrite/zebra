define([
    'backbone',
    'js/post_item_view.js'
],
function (Backbone, PostItemView) {

    var PostCollectionView = Backbone.Marionette.CollectionView.extend({
        itemView: PostItemView,
    });

    return PostCollectionView;
});
