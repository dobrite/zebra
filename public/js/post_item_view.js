define([
    'backbone',
    'hbs!js/templates/post_template',
],
function (Backbone, PostTemplate) {

    var PostItemView = Backbone.Marionette.ItemView.extend({
        tagName: "article",
        className: "list-group-item",
        template: PostTemplate,

        initialize: function (options) {
            options.model.set('idx', options.idx + 1);
        }

    });

    return PostItemView;
});
