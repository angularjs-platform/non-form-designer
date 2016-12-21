const moduleName: string = 'non.ifu.form-designer';

// Bundle - config
import {UiRouterConfig} from './form-designer.routes';

// Controller
import {FormDesignerIFUController} from './form-designer.controller';

// Sub Modules
import jsonEditorSetup from './jsoneditor-setup/jsoneditor-setup.module';
import formBuilder from './form-builder/form-builder.module';

angular.module(moduleName, [jsonEditorSetup, formBuilder])
    .controller('FormDesignerIFUController', FormDesignerIFUController)
    .config(UiRouterConfig);

export * from './form-designer.model';

export default moduleName;
