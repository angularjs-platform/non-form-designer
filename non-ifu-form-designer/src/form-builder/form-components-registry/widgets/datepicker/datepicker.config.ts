import {FormBuilder} from '../../../form-builder';

export class FormBuilderConfig {

    constructor(private FormBuilderProvider: FormBuilder.IFormBuilderProvider) {
        'ngInject';

        this.FormBuilderProvider.registerComponent({
            name: 'datepicker',
            group: 'Components',
            label: 'Datepicker',
            template: require('./datepicker.tpl'),
            propertiesEditorTemplate: require('./datepicker-editor.metadata.json')
        });
    }
}
