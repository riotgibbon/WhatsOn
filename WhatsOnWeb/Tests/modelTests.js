/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../Scripts/models/DataSources.js" />

describe("tests on request keys", function() {
    
    var requestKeys = DataSources.range("a","z");
    it("should return an array of 26 items", function() {
        expect(requestKeys.length).toBe(26);
    });
    it("first item should be 'a'", function() {
        expect(requestKeys[0]).toBe('a');
    }); it("first item should be 'z'", function() {
        expect(requestKeys[25]).toBe('z');
    });
});





describe("framework test", function() {
    it("tests test framework", function() {
        expect(true).toBe(true);
    });
})