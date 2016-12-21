import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {
    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'fieldset',
            group: 'Containers',
            label: 'Fieldset',
            isWrapper: true,
            template: require('./fieldset.tpl'),
            objectTemplate: require('./fieldset-object.tpl'),
            propertiesEditorTemplate: require('./fieldset-editor.metadata.json')
        });
    }
}
