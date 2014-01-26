define([
    'backbone',
    'hbs!js/templates/post_template',
],
function (Backbone, PostTemplate) {

    var PostItemView = Backbone.Marionette.ItemView.extend({
        tagName: "article",
        className: "list-group-item",

        initialize: function (options) {
            options.model.set('idx', options.idx + 1);
        },

        template: {
            type: 'handlebars',
            template: PostTemplate
        },
    });

    return PostItemView;
});
