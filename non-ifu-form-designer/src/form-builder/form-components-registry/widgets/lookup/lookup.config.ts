import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {

    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'lookup',
            group: 'Components',
            label: 'Lookup',
            template: require('./lookup.tpl'),
            propertiesEditorTemplate: require('./lookup-editor.metadata.json')
        });
    }
}
