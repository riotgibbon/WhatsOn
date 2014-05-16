/// <reference path="../interactors/DataSources.js" />
/// <reference path="responseModel.js" />

var requestModel = function(params) {

    var that = {};
    var values = {};
    var checkedParams = params || {};
    values.letter = checkedParams.letter || "a";
    values.page = DataSources.getNumberFromParam(checkedParams.page, 1); //could do number check here
    values.size = DataSources.getNumberFromParam(checkedParams.size, 20); //could do number check here
   
  
    that.letter = function() { return values.letter; };
    that.page = function() { return values.page; };
    that.size = function() { return values.size; };
    return that;
};

define("requestModel", function (require) {
    return requestModel;
});

