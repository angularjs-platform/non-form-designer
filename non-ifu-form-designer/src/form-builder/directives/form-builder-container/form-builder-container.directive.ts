import {FormBuilderContainerController} from './form-builder-container.controller';

export class FormBuilderContainerDirective implements ng.IDirective {

    restrict = 'E';
    controller = FormBuilderContainerController;
    controllerAs = 'vm';
    template = require('./form-builder-container.tpl');
    bindToController = true;
    scope = true;

    static instance(): ng.IDirective {
        'ngInject';

        return new FormBuilderContainerDirective();
    }

    constructor() {
        // Empty
    }

}
