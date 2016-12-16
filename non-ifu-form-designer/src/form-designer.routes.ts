import { IStateProvider } from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider
    ) {
        'ngInject';
        $stateProvider
            .state('form-designer', {
                url: '/form-designer',
                views   : {
                    'main@': {
                        template: require('./form-designer.tpl'),
                        controller: 'FormDesignerIFUController',
                        controllerAs: 'vm'
                    }
                }
        });
    }
}
