export class LocalizationConfig {
    constructor(private $translateProvider: ng.translate.ITranslateProvider) {
        'ngInject';

        // Browser based preferred language determination
        this.$translateProvider.determinePreferredLanguage();

        // Sanitization of Values
        this.$translateProvider.useSanitizeValueStrategy('sanitize');

        // Fall back language if no localization key is found in current language
        this.$translateProvider.fallbackLanguage('en');

        // Storage to remember user selected language.
        // If browser doesnt support local storage then it uses cookie storage
        this.$translateProvider.useLocalStorage();

        // Partial Loader
        this.$translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '/locale/{part}?lang={lang}'
        });
    }
}
