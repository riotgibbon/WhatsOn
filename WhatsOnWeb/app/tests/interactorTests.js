/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../entities/requestModel.js" />
/// <reference path="../interactors/BBCProgsV1.js" />

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
        