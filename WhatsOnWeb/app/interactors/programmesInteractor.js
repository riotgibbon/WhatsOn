var programmesInteractor = function(params) {
    var that = {};
    var checkedParams = params || {};
    var imageSize = checkedParams.imageSize || "160x90";
    that.getApiName = function() {
        return params.api().getName();
    };

    that.requestProgrammes = function(requestModel, response) {
        var uri = params.api().getUri(requestModel);
        params.httpClient().requestJsonResponse(uri, function(responseObject) {
            var mappedResponseObject = params.api().mapToResponseModel({ response: responseObject, imageSize: imageSize });
            response(mappedResponseObject);
        });
    };
    return that;
};
//AMD versions
define("programmesInteractor", function (require) {
    var responseModel = require("responseModel");
    var requestModel = require("requestModel");
    return programmesInteractor;
});
