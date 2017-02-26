import * as angular from 'angular';

const moduleName: string = 'non.ifu.form-designer.form-builder';

// Sub Modules
import core from './core/core.module';
import directives from './directives/directives.module';
import formComponentsRegistry from './form-components-registry/form-components-registry.module';

angular.module(moduleName, [core, directives, formComponentsRegistry]);

export default moduleName;
