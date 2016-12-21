import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {

    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'switch',
            group: 'Components',
            label: 'Switch',
            template: require('./switch.tpl'),
            propertiesEditorTemplate: require('./switch-editor.metadata.json')
        });
    }
}
