/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../entities/requestModel.js" />
/// <reference path="../entities/programme.js" />


describe("Request model", function () {
    describe("when not supplied parameters, should default to", function () {
        var thisRequestModel = requestModel();
        it("letter 'a'", function() {
            expect(thisRequestModel.letter()).toBe("a");
        });
        it("page 1", function () {
            expect(thisRequestModel.page()).toBe(1);
        });
        it("size 20", function () {
            expect(thisRequestModel.size()).toBe(20);
        });
    });

    describe("when supplied parameters 'letter: 'b', page:5, size:15'", function () {
        var params = { letter: "b", page:5, size:15 };
        var thisRequestModel = requestModel(params);
        it("letter 'b'", function () {
            expect(thisRequestModel.letter()).toBe("b");
        });
        it("page 5", function () {
            expect(thisRequestModel.page()).toBe(5);
        });
        it("size 15", function () {
            expect(thisRequestModel.size()).toBe(15);
        });
    });
    
    describe("when supplied parameters  page:'7', size:'22' as strings, not numbers", function () {
        var params = { page: '7', size: '22' };
        var thisRequestModel = requestModel(params);
       
        it("page 7", function () {
            expect(thisRequestModel.page()).toBe(7);
        });
        it("size 2", function () {
            expect(thisRequestModel.size()).toBe(22);
        });
    });


    describe("when supplied non-number page and size values", function() {
        var params = {  page: "five", size: "size" };
        var thisRequestModel = requestModel(params);
        it("default to page 1", function () {
            expect(thisRequestModel.page()).toBe(1);
        });
        it("default to size 20", function () {
            expect(thisRequestModel.size()).toBe(20);
        });
    });
    
    describe("when supplied 0 or negative page and size values", function () {
        var params = { page: -5, size: 0 };
        var thisRequestModel = requestModel(params);
        it("default to page 1", function () {
            expect(thisRequestModel.page()).toBe(1);
        });
        it("default to size 20", function () {
            expect(thisRequestModel.size()).toBe(20);
        });
    });

});

describe("Programme", function() {

    describe("create Programme 'foo' with image 'bar'", function () {
        var params = { title: 'foo', image: 'bar' };
        
        var thisProgramme = programme(params);
        it("should have title 'foo'", function() {
            expect(thisProgramme.title()).toBe("foo");
        });
        
        it("should have image 'bar'", function () {
            expect(thisProgramme.image()).toBe("bar");
        });
    });
});