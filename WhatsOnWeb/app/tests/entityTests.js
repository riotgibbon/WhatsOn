/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../entities/requestModel.js" />


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
});