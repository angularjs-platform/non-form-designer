export class Run {
    constructor(
        private $rootScope: ng.IRootScopeService,
        private $state: ng.ui.IStateService,
        private $mdToast:  angular.material.IToastService) {
        'ngInject';

        const unbindRequestErrorHandler: any = this.$rootScope.$on('http-request-error', this.httpErrorHandler);
        const unbindResponseErrorHandler: any = this.$rootScope.$on('http-response-error', this.httpErrorHandler);

        this.$rootScope.$on('$destroy', unbindRequestErrorHandler);
        this.$rootScope.$on('$destroy', unbindResponseErrorHandler);

    }
    private httpErrorHandler = (event: ng.IAngularEvent, status: number, statusText: string,
        headers: ng.IHttpHeadersGetter): void => {
        if (status === 401) {
            this.$state.go('login');
        } else {
            this.$mdToast.show(
            this.$mdToast.simple()
            .textContent('The server responded with the HTTP code ' + status + ' (' + statusText + ')')
            .position('top right'));

        }
    };
}
