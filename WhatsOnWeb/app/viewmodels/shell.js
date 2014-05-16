define(['plugins/router', 'durandal/app', 'knockout' ], function (router, app,ko) {
    return {
        router: router,
        
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'programmes', moduleId: 'viewmodels/progs', nav: true },
                { route: 'notes', moduleId: 'viewmodels/notes', nav: true }
               
            ]).buildNavigationModel();
            
            return router.activate();
        },
        showSplash: ko.observable(false)
    };
});