import * as angular from 'angular';

const moduleName: string = 'non.ifu.form-designer.form-builder.form-components-registry.widgets.switch';

import {FormBuilderConfig} from './switch.config';

angular.module(moduleName, [])
    .config(FormBuilderConfig);

export default moduleName;
