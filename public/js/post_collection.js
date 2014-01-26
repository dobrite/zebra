define([
    'backbone',
    'js/post_model',
],
function (Backbone, PostModel) {

    var PostCollection =  Backbone.Collection.extend({
        url: 'http://www.reddit.com/.json?limit=10',

        parse: function (resp, xhr) {
            return resp.data.children;
        },

        model: PostModel,
    });

    return PostCollection;
});
