define(['plugins/http', 'durandal/app', 'knockout','viewmodels/shell',  'datasources', 'programmesInteractor', 'api', 'httpClient', 'requestModel'], function (http, app, ko, shell, ds, pi, api, httpClient, requestModel) {
    //Note: This module exports an object.
    //That means that every module that "requires" it will get the same object instance.
    //If you wish to be able to create multiple instances, instead export a function.
    //See the "welcome" module for an example of function export.
    var selectedLetter = ko.observable("a");
    var apiSource = ko.observable();
    var interactor = pi({ api: api, httpClient: httpClient });
    var programmes = ko.observableArray([]);
    var pageNumbers = ko.observableArray([]);
    selectedLetter.subscribe(function (letter) {
        selectedPage("1");
        getProgrammes();
    });
    var selectedPage = ko.observable("1");
    var getProgrammes = function () {
        shell.showSplash(true);
        programmes([]);
        pageNumbers([]);
        var thisRequest = requestModel({ letter: selectedLetter(), page: selectedPage() });
        interactor.requestProgrammes(thisRequest,
            function (responseModel) {
            var count = responseModel.totalItems();
            programmes(responseModel.programmes());
            pageNumbers(responseModel.pageNumbers());
            shell.showSplash(false);
            },

            function (errorMessage) {
                shell.showSplash(false);
                alert("Sorry, could not get programmes for '" + selectedLetter() +"', other information:\n" + errorMessage);
            });
    };
    return {
        displayName: 'Programmes',
        images: ko.observableArray([]),
        letters: ds.requestKeys(),
        selectedLetter: selectedLetter,
        selectedPage: selectedPage,
        apiSource: apiSource,
        programmes: programmes,
        pageNumbers: pageNumbers,
        activate: function () {
            apiSource(interactor.getApiName());
            getProgrammes();
        },
        
        selectPage: function (page) {
            //the app model allows easy display of modal dialogs by passing a view model
            //views are usually located by convention, but you an specify it as well with viewUrl
            selectedPage(page);
            getProgrammes();
            
        }
       
    };
});