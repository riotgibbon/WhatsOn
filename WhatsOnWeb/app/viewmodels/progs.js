define(['plugins/http', 'durandal/app', 'knockout', 'datasources', 'programmesInteractor', 'api', 'httpClient', 'requestModel'], function (http, app, ko, ds, pi, api, httpClient, requestModel) {
    //Note: This module exports an object.
    //That means that every module that "requires" it will get the same object instance.
    //If you wish to be able to create multiple instances, instead export a function.
    //See the "welcome" module for an example of function export.
    var selectedLetter = ko.observable('a');
    var apiSource = ko.observable();
    var interactor = pi({ api: api, httpClient: httpClient });
    var programmes = ko.observableArray([]);
    var pageNumbers = ko.observableArray([]);
    
    var getProgrammes = function(letter, page) {
        var thisRequest = requestModel({ letter: letter, page: page });
        interactor.requestProgrammes(thisRequest, function (responseModel) {
            var count = responseModel.totalItems();
            programmes(responseModel.programmes());
            pageNumbers(responseModel.pageNumbers());
        });
    }
    return {
        displayName: 'Programmes',
        images: ko.observableArray([]),
        letters: ds.requestKeys(),
        selectedLetter: selectedLetter,
        apiSource: apiSource,
        programmes: programmes,
        pageNumbers: pageNumbers,
        activate: function () {
            apiSource(interactor.getApiName());
            //the router's activator calls this function and waits for it to complete before proceding
            if (this.images().length > 0) {
                return;
            }

            var that = this;
            return http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne', { tags: 'mount ranier', tagmode: 'any', format: 'json' }, 'jsoncallback').then(function(response) {
                that.images(response.items);
            });
        },
        selectLetter: function(letter) {
            //the app model allows easy display of modal dialogs by passing a view model
            //views are usually located by convention, but you an specify it as well with viewUrl
            getProgrammes(letter, "1");
            selectedLetter(letter);
        },
        selectPage: function (page) {
            //the app model allows easy display of modal dialogs by passing a view model
            //views are usually located by convention, but you an specify it as well with viewUrl
            getProgrammes(selectedLetter(), page);
            
        },
        canDeactivate: function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        }
    };
});