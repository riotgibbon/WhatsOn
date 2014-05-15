var bbcProgsV1 = function(requestModel) {
    var that = {};
    that.getUri = function () {
        
        var apiKey = getAPIKey();
        
        return "http://data.bbc.co.uk/ibl/v1/atoz/" + requestModel.letter() + "/programmes?rights=web&page=" + requestModel.page() + "&per_page=" + requestModel.size() + "&initial_child_count=0&sort=title&sort_direction=asc&availability=available&api_key=" + apiKey;
    };
    
    //better ways than this, best to keep secrets on the serverside. Belongs here though, key will/should be specific to 
    var getAPIKey = function() {
         return "x01Hi6NYkTrv0bAdP4a0nd1cgoGvUNeF";
    };
    return that;
}