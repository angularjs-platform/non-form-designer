import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {

    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'multiselect',
            group: 'Components',
            label: 'Multiselect',
            template: require('./multiselect.tpl'),
            propertiesEditorTemplate: require('./multiselect-editor.metadata.json')
        });
    }
}
