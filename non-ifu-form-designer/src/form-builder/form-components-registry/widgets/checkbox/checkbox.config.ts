import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {

    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'checkbox',
            group: 'Components',
            label: 'Checkbox',
            template: require('./checkbox.tpl'),
            propertiesEditorTemplate: require('./checkbox-editor.metadata.json')
        });
    }
}
