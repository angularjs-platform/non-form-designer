import {FormBuilderContainerController} from './form-builder-container.controller';

class FormBuilderContainerDirective implements ng.IDirective {

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

export default FormBuilderContainerDirective.instance;
