define([
    'backbone',
    'hbs!js/templates/waiting_template',
],
function (Backbone, WaitingTemplate) {

    var WaitingItemView = Backbone.Marionette.ItemView.extend({
        template: WaitingTemplate
    });

    return WaitingItemView;
});
