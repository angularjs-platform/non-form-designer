export class HTTPConfig {
    constructor(private $httpProvider: ng.IHttpProvider) {
        'ngInject';
        this.$httpProvider.interceptors.push('HttpInterceptor');
    }
}
