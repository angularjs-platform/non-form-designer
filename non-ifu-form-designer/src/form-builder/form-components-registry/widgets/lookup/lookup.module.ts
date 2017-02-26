import * as angular from 'angular';

const moduleName: string = 'non.ifu.form-designer.form-builder.form-components-registry.widgets.lookup';

import {FormBuilderConfig} from './lookup.config';

angular.module(moduleName, [])
    .config(FormBuilderConfig);

export default moduleName;
