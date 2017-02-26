import * as angular from 'angular';

const moduleName: string = 'non.ifu.form-designer.form-builder.directives.form-component';

import {FormBuilderFormComponentController} from './form-component.controller';
import {FormBuilderFormComponentEditorController} from './form-component-config-editor.controller';
import {FormBuilderFormComponentDirective} from './form-component.directive';

angular.module(moduleName, [])
    .controller('FormBuilderFormComponentController', FormBuilderFormComponentController)
    .controller('FormBuilderFormComponentEditorController', FormBuilderFormComponentEditorController)
    .directive('formBuilderFormComponent', FormBuilderFormComponentDirective.instance);

export default moduleName;
