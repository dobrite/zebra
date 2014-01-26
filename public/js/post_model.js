define([
    'backbone'
],
function (Backbone) {

    var PostModel = Backbone.Model.extend({
        parse: function (resp, xhr) {
            return resp.data;
        }
    });

    return PostModel;
});
