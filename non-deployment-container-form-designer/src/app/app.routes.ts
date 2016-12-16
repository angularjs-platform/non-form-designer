export class UIRouterConfig {

    constructor(
        private $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        'ngInject';

        this.$urlRouterProvider.otherwise('/form-designer');
    }
}

