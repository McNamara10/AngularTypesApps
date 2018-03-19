var app;
(function (app) {
    var UtentiController = (function () {
        function UtentiController() {
            console.log('UtentiController');
        }
        return UtentiController;
    }());
    app.UtentiController = UtentiController;
    angular.module('app').controller('UtentiController', UtentiController);
})(app || (app = {}));
