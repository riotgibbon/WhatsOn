var programmesInteractor = function(params) {
    var that = {};

    that.getApiName = function() {
        return params.api().getName();
    };

    that.requestProgrammes = function(requestModel, response) {
        var uri = params.api().getUri(requestModel);
        params.httpClient().requestJsonResponse(uri, function(responseObject) {

            var mappedResponseObject = params.api().mapToResponseModel(responseObject);
            response(mappedResponseObject);
        });
    };
    return that;
};
define("programmesInteractor", function (require) {
    var responseModel = require("responseModel");
    var requestModel = require("requestModel");
    return programmesInteractor;
});
