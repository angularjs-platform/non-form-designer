import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {
    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'fieldwrapper',
            group: 'Containers',
            label: 'Fieldwrapper',
            isWrapper: true,
            template: require('./fieldwrapper.tpl'),
            objectTemplate: require('./fieldwrapper-object.tpl'),
            propertiesEditorTemplate: require('./fieldwrapper-editor.metadata.json')
        });
    }
}
