import {FormBuilder} from '../../form-builder';
import { FormConfiguration, IFormDisplayState } from '@norn/non-framework';

export class FormBuilderFormComponentEditorController {

    public component: FormBuilder.FormComponentObjectConfig;
    public formConfiguration: FormConfiguration;

    constructor(private FormDisplayState: IFormDisplayState,
                private $mdDialog: ng.material.IDialogService,
                private _: _.LoDashStatic) {
        'ngInject';

        this.formConfiguration = {
            model: this.component.formlyField,
            fields: this._.cloneDeep(this.component.propertiesEditorTemplate),
            options: {
                formState: {
                    displayState: this.FormDisplayState.update
                }
            }
        };
    }

    public cancel = (): void => {
        this.$mdDialog.cancel();
    };

    public save = (): void => {
        this.$mdDialog.hide(this.formConfiguration.model);
    };
}
