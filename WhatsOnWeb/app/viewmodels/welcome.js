define(function() {
    var ctor = function () {
        this.displayName = 'What\'s on';
        this.description = 'Sample programme guide for BBC TV content! Click on "programmes" above to get started ...';
        this.features = [
            'fully unit tested, with external dependencies mocked',
            'all abstract domain data types, with no dependencies on external domain',
            'SOLID principles observed throughout',
            'pluggable API data sources',
            'pluggable HTTP request broker, currently JQuery but simple to switch ',
            'no application dependency on UI',
            'Durandal/knockout used for presentation, easily switched to any other',
            'requirejs used to map domain objects/services to presentation layer',
            'uses static image size, can potentially make dynamic',
            'simple error handling if request fails'
        ];
    };

    

    return ctor;
});