import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {

    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'input',
            group: 'Components',
            label: 'Input',
            template: require('./input.tpl'),
            propertiesEditorTemplate: require('./input-editor.metadata.json')
        });
    }
}
