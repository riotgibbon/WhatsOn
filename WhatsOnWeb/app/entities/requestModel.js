var requestModel = function (params) {
    
    var that = {};
    var values = {};
    var checkedParams = params || {};
    values.letter = checkedParams.letter || "a";
    values.page = getNumberFromParam(checkedParams.page, 1); //could do number check here
    values.size = getNumberFromParam(checkedParams.size , 20); //could do number check here

    function getNumberFromParam(value, defaultValue) {
        if (isNaN(value)) return defaultValue;
        return value || defaultValue;
    }

  
    that.letter = function() { return values.letter; };
    that.page = function() { return values.page; };
    that.size = function() { return values.size; };
    return that;
}