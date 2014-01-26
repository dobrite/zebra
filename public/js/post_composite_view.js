define([
    'backbone',
    'js/post_item_view.js',
    'hbs!js/templates/posts_template'
],
function (Backbone, PostItemView, PostsTemplate) {

    var PostCompositeView = Backbone.Marionette.CompositeView.extend({
        tagName: "div",
        className: "panel panel-default",

        template: PostsTemplate,

        itemView: PostItemView,
        itemViewContainer: '#posts-list',

        itemViewOptions: function(model, index) {
            return { idx: index };
        }
    });

    return PostCompositeView;
});
