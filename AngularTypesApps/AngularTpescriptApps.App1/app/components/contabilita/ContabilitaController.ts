
module app.components.contabilita {
    interface IStoreContabilitaController {
        title: string;
        stores: any[];
        
    }

    /* export class ContabilitaController {
         constructor() {
             console.log('ContabilitaController');
         }
     }
     angular.module('app').controller('ContabilitaController', ContabilitaController);*/

    class ContabilitaController implements IStoreContabilitaController {
        title: string;
        total: number;
        stores: any[];

        constructor() {
            this.title = "Lista Operazioni";
            this.stores = [
                {
                    "Operazione": "Spese Autostrada",
                    "Tipo":"Uscita",
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

        public totale(): void {
            return this.stores["Importo"];;

        }
    }

    angular.module("app").controller("ContabilitaController", ContabilitaController);

}