import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {
    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'button',
            group: 'Components',
            label: 'Button',
            template: require('./button.tpl'),
            propertiesEditorTemplate: require('./button-editor.metadata.json')
        });
    }
}
