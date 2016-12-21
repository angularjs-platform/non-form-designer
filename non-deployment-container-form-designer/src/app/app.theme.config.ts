export class ThemeConfig {
    constructor(private $mdThemingProvider: any) {
        'ngInject';
        this.$mdThemingProvider.setDefaultTheme('base');
    }
}
