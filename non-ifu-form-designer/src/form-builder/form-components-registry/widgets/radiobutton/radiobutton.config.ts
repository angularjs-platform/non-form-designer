import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {

    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'radiobutton',
            group: 'Components',
            label: 'Radiobutton',
            template: require('./radiobutton.tpl'),
            propertiesEditorTemplate: require('./radiobutton-editor.metadata.json')
        });
    }
}
