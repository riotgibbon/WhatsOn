/// <reference path="../interactors/DataSources.js" />

var responseModel = function (params) {
    var that = {};
    var values = {};
    var checkedParams = params || {};
    
    values.totalItems = DataSources.getNumberFromParam(checkedParams.totalItems, 0);
    values.pageSize = DataSources.getNumberFromParam(checkedParams.pageSize, 0);
    values.programmes = checkedParams.programmes||[];

    that.pageNumbers = function () {
        return DataSources.range("1", highestPage());
    };

    that.programmes = function() { return values.programmes; };
    
    function highestPage() {
        if (values.totalItems < values.pageSize) return "1";
        return (Math.round((values.totalItems / values.pageSize) + 1)).toString();
    }
    return that;
}