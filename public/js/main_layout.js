define([
    'backbone',
    'hbs!js/templates/main_template',
],
function (Backbone, MainTemplate) {

    var MainLayout = Backbone.Marionette.Layout.extend({
        tagName: "div",
        className: "row",

        template: {
            type: 'handlebars',
            template: MainTemplate
        },

        regions: {
            postsRegion: "#posts"
        }
    });

    return MainLayout;
});
