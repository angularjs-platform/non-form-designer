export class LoadingBarConfig {
    constructor(private cfpLoadingBarProvider: any) {
        'ngInject';
        this.cfpLoadingBarProvider.includeSpinner = false;
    }
}
