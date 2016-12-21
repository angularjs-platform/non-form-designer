import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {

    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'divider',
            group: 'Components',
            label: 'Divider',
            template: require('./divider.tpl'),
            propertiesEditorTemplate: require('./divider-editor.metadata.json')
        });
    }
}
