/// <reference path="../../lib/jquery/jquery-1.9.1.js" />

var jqueryHttpClient = function () {
    var that = {};
    that.requestJsonResponse = function (uri, response) {
        $.getJSON(uri, {}, response);
    };
    return that;
};

define("httpClient", function (require) {
    return jqueryHttpClient;
});