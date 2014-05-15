/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../entities/requestModel.js" />
/// <reference path="../interactors/BBCProgsV1.js" />
/// <reference path="mocks/mockV1.js" />


describe("Data source request formatting", function() {
    describe("BBC API V1", function() {
        
            it("default requestModel should match standard spec", function () {
                var bbc = bbcProgsV1();
                var expected = "http://data.bbc.co.uk/ibl/v1/atoz/a/programmes?rights=web&page=1&per_page=20&initial_child_count=0&sort=title&sort_direction=asc&availability=available&api_key=x01Hi6NYkTrv0bAdP4a0nd1cgoGvUNeF";
                expect(bbc.getUri(requestModel())).toBe(expected);
            });   
       
            it("requestModel 'letter: 'c', page:7, size:17 should be ", function () {
                var params = { letter: "c", page: 5, size: 17 };
                var thisRequestModel = requestModel(params);
                var bbc = bbcProgsV1();
                var expected = "http://data.bbc.co.uk/ibl/v1/atoz/c/programmes?rights=web&page=5&per_page=17&initial_child_count=0&sort=title&sort_direction=asc&availability=available&api_key=x01Hi6NYkTrv0bAdP4a0nd1cgoGvUNeF";
                expect(bbc.getUri(thisRequestModel)).toBe(expected);
            });
       
    });
});

describe("mapping json response to responseModel", function() {
    var mockV1 = JSON.parse(mockV1JSONFull);
    var bbc = bbcProgsV1({});
    var mappedResponseModel = bbc.mapToResponseModel(mockV1);
    it("should be pageSize of 20", function () {
        expect(mappedResponseModel.pageSize()).toBe(20);
    });
    it("should have a total of 39 programmes available", function() {
        expect(mappedResponseModel.totalItems()).toBe(39);
    });
    it("should have 'a' as the requested search letter", function () {
        expect(mappedResponseModel.letter()).toBe('a');
    });
    it("should contain 20 programmes", function () {
        expect(mappedResponseModel.programmes().length).toBe(20);
    });
    
    it("should have 'A City Crowned with Green' as its first programme ", function () {
        expect(mappedResponseModel.programmes()[0].title()).toBe("A City Crowned with Green");
    });
    it("should have correct uri for image ", function () {
        expect(mappedResponseModel.programmes()[0].image()).toBe("http://ichef.bbci.co.uk/images/ic/{recipe}/p01hhrgb.jpg");
    });
});

describe("Mock json response parsing to confirm required values are present", function () {
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
    
    it("should expect 20 programmes per page", function () {
        expect(mockV1.atoz_programmes.per_page).toBe(20);
    });

    it("should have returned 20 programmes", function () {
        expect(mockV1.atoz_programmes.elements.length).toBe(20);
    });
    
    it("should have first programme 'A City Crowned with Green", function () {
        expect(mockV1.atoz_programmes.elements[0].title).toBe("A City Crowned with Green");
    });

});
        