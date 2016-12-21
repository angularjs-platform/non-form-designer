import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {

    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'select',
            group: 'Components',
            label: 'Select',
            template: require('./select.tpl'),
            propertiesEditorTemplate: require('./select-editor.metadata.json')
        });
    }
}
