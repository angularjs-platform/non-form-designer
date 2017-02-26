import * as angular from 'angular';

const moduleName: string = 'non.ifu.form-designer.form-builder.form-components-registry.widgets.radiobutton';

import {FormBuilderConfig} from './radiobutton.config';

angular.module(moduleName, [])
    .config(FormBuilderConfig);

export default moduleName;
