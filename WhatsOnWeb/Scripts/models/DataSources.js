function DataSources(){}

DataSources.requestKeys = function() {
    return DataSources.range("a", "z");
};

DataSources.range = function (first, last) {
    var requestKeys = [];
    for (var idx = first.charCodeAt(0), end = last.charCodeAt(0) ; idx <= end; ++idx) {
        requestKeys.push(String.fromCharCode(idx));
    }
    return requestKeys;
};