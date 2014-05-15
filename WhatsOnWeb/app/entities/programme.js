var programme = function (params) {
    var that= {};
    var values = {};
    var checkedParams = params || {};
    values.title = checkedParams.title || "n/a";
    values.image = checkedParams.image || "n/a";

    that.title = function () { return values.title; };
    that.image = function () { return values.image; };
    return that;
}