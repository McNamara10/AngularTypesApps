var app;
(function (app) {
    var HomeController = (function () {
        function HomeController() {
            console.log('HomeController');
        }
        return HomeController;
    }());
    app.HomeController = HomeController;
    angular.module('app').controller('HomeController', HomeController);
})(app || (app = {}));
