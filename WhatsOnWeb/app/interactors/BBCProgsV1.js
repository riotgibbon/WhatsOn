﻿

var bbcProgsV1 = function() {
    var that = {};
    that.getUri = function(requestModel) {
        var apiKey = getAPIKey();
        return "http://data.bbc.co.uk/ibl/v1/atoz/" + requestModel.letter() + "/programmes?rights=web&page=" + requestModel.page() + "&per_page=" + requestModel.size() + "&initial_child_count=0&sort=title&sort_direction=asc&availability=available&api_key=" + apiKey;
    };

    that.getName = function() { return "BBC v1"; };

    that.mapToResponseModel = function(params) {
        var response = params.response;
        var imageSize = params.imageSize;
        var programmes = [];
        if (response.atoz_programmes != null) {
            for (var i = 0; i < response.atoz_programmes.elements.length; i++) {
                var element = response.atoz_programmes.elements[i];
                var image = element.images.standard.replace("{recipe}", imageSize);
                programmes.push(programme({ title: element.title, image: image }));
            }
        }
        return responseModel({
            pageSize: response.atoz_programmes.per_page,
            totalItems: response.atoz_programmes.count,
            programmes: programmes,
            letter: response.atoz_programmes.character
        });
    };

    //better ways than this, best to keep secrets on the serverside. Belongs here though, key will/should be specific to 
    var getAPIKey = function() {
        return "x01Hi6NYkTrv0bAdP4a0nd1cgoGvUNeF";
    };
    return that;
};

define("api", function (require) {
    return bbcProgsV1;
});