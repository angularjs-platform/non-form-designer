const moduleName: string = 'non.ifu.form-designer';

// Bundle - config
import {UiRouterConfig} from './form-designer.routes';

// Controller
import {FormDesignerIFUController} from './form-designer.controller';

// Sub Modules
import jsonEditorSetup from './jsoneditor-setup/jsoneditor-setup.module';

angular.module(moduleName, [jsonEditorSetup])
    .controller('FormDesignerIFUController', FormDesignerIFUController)
    .config(UiRouterConfig);

export default moduleName;
