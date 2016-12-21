import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {

    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'textarea',
            group: 'Components',
            label: 'Textarea',
            template: require('./textarea.tpl'),
            propertiesEditorTemplate: require('./textarea-editor.metadata.json')
        });
    }
}
