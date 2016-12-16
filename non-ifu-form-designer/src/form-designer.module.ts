const moduleName: string = 'non.ifu.form-designer';

// Bundle - config
import {UiRouterConfig} from './form-designer.routes';

// Controller
import {FormDesignerIFUController} from './form-designer.controller';

angular.module(moduleName, [])
    .controller('FormDesignerIFUController', FormDesignerIFUController)
    .config(UiRouterConfig);

export default moduleName;
