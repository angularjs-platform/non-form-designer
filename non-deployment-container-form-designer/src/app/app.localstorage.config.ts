export class LocalStorageConfig {
    constructor(private localStorageServiceProvider: angular.local.storage.ILocalStorageServiceProvider) {
        'ngInject';

        localStorageServiceProvider.setPrefix('nonApp');
    }
}
