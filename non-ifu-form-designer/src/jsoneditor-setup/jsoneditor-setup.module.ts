import * as angular from 'angular';

const moduleName: string = 'non.ifu.form-designer.jsoneditor-setup';

// Setup editor
const JSONEditor: any = require('jsoneditor');

// Config
import {JSONEditorConfig} from './jsoneditor.config';

angular.module(moduleName, ['ng.jsoneditor'])
    .constant('JSONEditor', JSONEditor)
    .config(JSONEditorConfig);

export default moduleName;
