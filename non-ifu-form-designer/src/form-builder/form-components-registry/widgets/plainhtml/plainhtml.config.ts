import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {

    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'plainhtml',
            group: 'Components',
            label: 'HTML Template',
            template: require('./plainhtml.tpl'),
            propertiesEditorTemplate: require('./plainhtml-editor.metadata.json')
        });
    }
}
