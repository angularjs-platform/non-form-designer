import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {

    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'submitbutton',
            group: 'Components',
            label: 'SubmitButton',
            template: require('./submit-button.tpl'),
            propertiesEditorTemplate: require('./submit-button-editor.metadata.json')
        });
    }
}
