import * as angular from 'angular';

const moduleName: string = 'non.ifu.form-designer.form-builder.directives';

// Submodules
import formBuilderContainer from './form-builder-container/form-builder-container.module';
import formComponent from './form-component/form-component.module';

angular.module(moduleName, [formBuilderContainer, formComponent]);

export default moduleName;
