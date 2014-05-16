/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../interactors/DataSources.js" />
/// <reference path="../../lib/require/require.js" />


describe("range utility function to create sequential array of characters", function() {
    it("will return 10 characters A-J", function() {
        var range = DataSources.range("A", "J");
        expect(range.length).toBe(10);
        expect(range[4]).toBe("E");
    });
    
    it("will return 10 characters 0-9", function () {
        var range = DataSources.range("0", "9");
        expect(range.length).toBe(10);
        expect(range[3]).toBe("3");
    });

    describe("specialised requestKeys - returns a-z, 0-9", function () {
        var requestKeys = DataSources.requestKeys();
        it("should return an array of 36 items", function() {
            expect(requestKeys.length).toBe(36);
        });
        it("first item should be 'a'", function() {
            expect(requestKeys[0]).toBe('a');
        });
        it("first item should be '9'", function() {
            expect(requestKeys[35]).toBe('9');
        });
    });
});





describe("framework test", function() {
    it("tests test framework", function() {
        expect(true).toBe(true);
    });
})