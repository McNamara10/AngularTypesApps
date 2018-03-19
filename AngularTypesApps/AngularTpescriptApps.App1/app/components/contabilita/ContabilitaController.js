var app;
(function (app) {
    var components;
    (function (components) {
        var contabilita;
        (function (contabilita) {
            /* export class ContabilitaController {
                 constructor() {
                     console.log('ContabilitaController');
                 }
             }
             angular.module('app').controller('ContabilitaController', ContabilitaController);*/
            var ContabilitaController = (function () {
                function ContabilitaController() {
                    this.title = "Lista Operazioni";
                    this.stores = [
                        {
                            "Operazione": "Spese Autostrada",
                            "Tipo": "Uscita",
                            "Data": "12-11-2018",
                            "Importo": 6,
                        },
                        {
                            "Operazione": "Spese Carburante",
                            "Tipo": "Uscita",
                            "Data": "12-11-2018",
                            "Importo": 10,
                        },
                        {
                            "Operazione": "Stipendio Marzo",
                            "Tipo": "Uscita",
                            "Data": "12-11-2018",
                            "Importo": 10,
                        },
                    ];
                }
                ContabilitaController.prototype.totale = function () {
                    return this.stores["Importo"];
                    ;
                };
                return ContabilitaController;
            }());
            angular.module("app").controller("ContabilitaController", ContabilitaController);
        })(contabilita = components.contabilita || (components.contabilita = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
