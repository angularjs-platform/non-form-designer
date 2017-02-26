import * as angular from 'angular';

const moduleName: string = 'non.ifu.form-designer.form-builder.directives.form-builder-container';

import {FormBuilderContainerController} from './form-builder-container.controller';
import {FormBuilderContainerDirective} from './form-builder-container.directive';

angular.module(moduleName, [])
    .controller('FormBuilderContainerController', FormBuilderContainerController)
    .directive('formBuilderContainer', FormBuilderContainerDirective.instance);

export default moduleName;
