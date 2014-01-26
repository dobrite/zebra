define([
    'backbone',
    'js/post_model',
],
function (Backbone, PostModel) {

    var PostCollection =  Backbone.Collection.extend({
        url: 'hnproxy',

        parse: function (resp, xhr) {
            return resp.items;
        },

        model: PostModel,
    });

    return PostCollection;
});
