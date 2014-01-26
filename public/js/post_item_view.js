define([
    'backbone',
    'hbs!js/post_template',
],
function (Backbone, PostTemplate) {

    var PostItemView = Backbone.Marionette.ItemView.extend({
        tagName: "article",

        template: {
            type: 'handlebars',
            template: PostTemplate
        },
    });

    return PostItemView;
});
