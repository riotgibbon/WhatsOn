/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../entities/requestModel.js" />
/// <reference path="../interactors/BBCProgsV1.js" />
/// <reference path="mocks/mockV1.js" />


describe("Data source request formatting", function() {
    describe("BBC API V1", function() {
        
            it("default requestModel should match standard spec", function () {
                var bbc = bbcProgsV1(requestModel());
                var expected = "http://data.bbc.co.uk/ibl/v1/atoz/a/programmes?rights=web&page=1&per_page=20&initial_child_count=0&sort=title&sort_direction=asc&availability=available&api_key=x01Hi6NYkTrv0bAdP4a0nd1cgoGvUNeF";
                expect(bbc.getUri()).toBe(expected);
            });   
       
            it("requestModel 'letter: 'c', page:7, size:17 should be ", function () {
                var params = { letter: "c", page: 5, size: 17 };
                var thisRequestModel = requestModel(params);
                var bbc = bbcProgsV1(thisRequestModel);
                var expected = "http://data.bbc.co.uk/ibl/v1/atoz/c/programmes?rights=web&page=5&per_page=17&initial_child_count=0&sort=title&sort_direction=asc&availability=available&api_key=x01Hi6NYkTrv0bAdP4a0nd1cgoGvUNeF";
                expect(bbc.getUri()).toBe(expected);
            });
       
    });
});

describe("Mock json response parsing", function () {
    var mockV1 = JSON.parse(mockV1JSONFull);
    it("should be version '1.0", function () {
        expect(mockV1.version).toBe("1.0");
    });
    it("should be schema '/ibl/v1/schema/ibl.json'", function () {
        expect(mockV1.schema).toBe("/ibl/v1/schema/ibl.json");
    });

    it("should be on page 1", function() {
        expect(mockV1.atoz_programmes.page).toBe(1);
    });
    
    it("should be for the letter 'a'", function () {
        expect(mockV1.atoz_programmes.character).toBe('a');
    });

    it("should have a total of 39 programmes available", function() {
        expect(mockV1.atoz_programmes.count).toBe(39);
    });
    
    it("should have returned 20 programmes", function () {
        expect(mockV1.atoz_programmes.elements.length).toBe(20);
    });
    
    it("should have first programme 'A City Crowned with Green", function () {
        expect(mockV1.atoz_programmes.elements[0].title).toBe("A City Crowned with Green");
    });

});
        