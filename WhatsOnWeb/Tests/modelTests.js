/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../Scripts/models/DataSources.js" />

describe("tests on request keys", function() {
    
    var requestKeys = DataSources.getRequestKeys();
    it("should return an array of 26 items", function() {
        expect(requestKeys.length).toBe(26);
    });
});





describe("framework test", function() {
    it("tests test framework", function() {
        expect(true).toBe(true);
    });
})