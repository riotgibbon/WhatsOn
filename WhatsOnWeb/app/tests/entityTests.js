/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../entities/requestModel.js" />
/// <reference path="../entities/programme.js" />
/// <reference path="../entities/responseModel.js" />
/// <reference path="../interactors/DataSources.js" />


describe("Entities", function() {
    describe("Request model", function() {
        describe("when not supplied parameters, should default to", function() {
            var thisRequestModel = requestModel();
            it("letter 'a'", function() {
                expect(thisRequestModel.letter()).toBe("a");
            });
            it("page 1", function() {
                expect(thisRequestModel.page()).toBe(1);
            });
            it("size 20", function() {
                expect(thisRequestModel.size()).toBe(20);
            });
        });

        describe("when supplied parameters 'letter: 'b', page:5, size:15'", function() {
            var params = { letter: "b", page: 5, size: 15 };
            var thisRequestModel = requestModel(params);
            it("letter 'b'", function() {
                expect(thisRequestModel.letter()).toBe("b");
            });
            it("page 5", function() {
                expect(thisRequestModel.page()).toBe(5);
            });
            it("size 15", function() {
                expect(thisRequestModel.size()).toBe(15);
            });
        });

        describe("when supplied parameters  page:'7', size:'22' as strings, not numbers", function() {
            var params = { page: '7', size: '22' };
            var thisRequestModel = requestModel(params);

            it("page 7", function() {
                expect(thisRequestModel.page()).toBe(7);
            });
            it("size 2", function() {
                expect(thisRequestModel.size()).toBe(22);
            });
        });


        describe("when supplied non-number page and size values", function() {
            var params = { page: "five", size: "size" };
            var thisRequestModel = requestModel(params);
            it("default to page 1", function() {
                expect(thisRequestModel.page()).toBe(1);
            });
            it("default to size 20", function() {
                expect(thisRequestModel.size()).toBe(20);
            });
        });

        describe("when supplied 0 or negative page and size values", function() {
            var params = { page: -5, size: 0 };
            var thisRequestModel = requestModel(params);
            it("default to page 1", function() {
                expect(thisRequestModel.page()).toBe(1);
            });
            it("default to size 20", function() {
                expect(thisRequestModel.size()).toBe(20);
            });
        });

    });

    describe("Programme", function() {

        describe("create Programme 'foo' with image 'bar'", function() {
            var params = { title: 'foo', image: 'bar' };

            var thisProgramme = programme(params);
            it("should have title 'foo'", function() {
                expect(thisProgramme.title()).toBe("foo");
            });

            it("should have image 'bar'", function() {
                expect(thisProgramme.image()).toBe("bar");
            });
        });
    });

    describe("responseModel", function() {

        describe("if passed expected 47 total items with page size of 15 ", function () {
            var params = { totalItems: 47, pageSize: 15 };
            var thisResponseModel = responseModel(params);
            it("should have offer 4 pages", function () {
                expect(thisResponseModel.pageNumbers().length).toBe(4);
            });
            it("should have first page value '1'", function () {
                expect(thisResponseModel.pageNumbers()[0]).toBe("1");
            });
            
            it("should have final page value '4'", function () {
                expect(thisResponseModel.pageNumbers()[3]).toBe("4");
            });
        });
        
        describe("if passed expected 22 total items with page size of 9 ", function () {
            var params = { totalItems: 22, pageSize: 9 };
            var thisResponseModel = responseModel(params);
            it("should have offer 3 pages", function () {
                expect(thisResponseModel.pageNumbers().length).toBe(3);
            });
            it("should have first pageNumber value '1'", function () {
                expect(thisResponseModel.pageNumbers()[0]).toBe("1");
            });

            it("should have final pageNumber value '3'", function () {
                expect(thisResponseModel.pageNumbers()[2]).toBe("3");
            });
        });
        
        describe("if passed expected 15 total items with page size of 30 ", function () {
            var params = { totalItems: 15, pageSize: 20 };
            var thisResponseModel = responseModel(params);
            it("should have offer 1 page", function () {
                expect(thisResponseModel.pageNumbers().length).toBe(1);
            });
            it("should have first pageNumber value '1'", function () {
                expect(thisResponseModel.pageNumbers()[0]).toBe("1");
            });

          
        });
    });
});