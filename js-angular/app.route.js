angular.module('app').
config(function($routeProvider) {
    $routeProvider

    // Whatever
    .when('/', {
        template: '<div></div>'
    })

    .when('/404', {
        template: '<div><img src="https://cdn-images-1.medium.com/max/800/1*qdFdhbR00beEaIKDI_WDCw.gif" </div>'
    })

    //Otherwise
    .otherwise({redirectTo:'/404'});
});
