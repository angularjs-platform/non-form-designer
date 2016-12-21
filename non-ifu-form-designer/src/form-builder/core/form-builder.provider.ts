import {FormBuilder} from '../form-builder';

export class FormBuilderService implements FormBuilder.IFormBuilderService {

    public designedForm: {[formObjectGroupId: string]: FormBuilder.FormComponentObjectConfig[]};
    public generatedMetadataForm: {[formObjectGroupId: string]: FormBuilder.FormComponentObjectConfig[]};

    constructor(private _: _.LoDashStatic,
                public formComponents: {[name: string]: FormBuilder.FormComponentConfig},
                public groups: {[name: string]: FormBuilder.FormComponentConfig[]}) {
        'ngInject';

        this.designedForm = {};
        this.generatedMetadataForm = {};
    }

    public createNewFormGroup = (formObjectGroupId: string): FormBuilder.FormComponentObjectConfig[] => {
        // Initialize
        if (!this._.isArray(this.designedForm[formObjectGroupId])) {
            this.designedForm[formObjectGroupId] = [];
        }

        return this.designedForm[formObjectGroupId];
    };

    public insertFormObject = (formObjectGroupId: string, index: number, formObject: FormBuilder.FormComponentObjectConfig): number => {

        // Reassign the index
        if (index > this.designedForm[formObjectGroupId].length) {
            index = this.designedForm[formObjectGroupId].length;
        }
        else if (index < 0) {
            index = 0;
        }

        // Add the formObject into the designedForm
        this.designedForm[formObjectGroupId].splice(index, 0, formObject);

        return index;
    };

    public removeFormObject = (formObjectGroupId: string, index: number): void => {
        this.designedForm[formObjectGroupId].splice(index, 1);
    };

    public deleteFormObject = (formObjectId: string, isWrapper: boolean): void => {
        let formObjectGroupId: string;
        let indexOfCurrentComponent: number;

        this._.forEach(this.designedForm, (formGroup: {}[], formGroupId: string): boolean =>  {
            indexOfCurrentComponent = this._.findIndex(formGroup, (formComponent: FormBuilder.FormComponentObjectConfig): boolean => {
                return formComponent.formObjectId === formObjectId;
            });

            if (indexOfCurrentComponent !== -1) {
                formObjectGroupId = formGroupId;
                return false;
            }
            else {
                return true;
            }
        });

        this.removeFormObject(formObjectGroupId, indexOfCurrentComponent);

        if (isWrapper) {
            this.designedForm[formObjectId] = null;
        }
    };
}

export class FormBuilderProvider implements FormBuilder.IFormBuilderProvider {

    private formComponents: {[name: string]: FormBuilder.FormComponentConfig};
    private groups: {[name: string]: FormBuilder.FormComponentConfig[]};

    constructor(private _: _.LoDashStatic) {
        'ngInject';

        this.formComponents = {};
        this.groups = {};
    }

    public registerComponent = (component: FormBuilder.FormComponentConfig): void => {
        if (!this.formComponents[component.name]) {
            this.formComponents[component.name] = component;

            if (!this.groups[component.group]) {
                this.groups[component.group] = [];
            }

            this.groups[component.group].push(component);
        }
        else {
            console.error('Duplicate! The component ' + component.name + ' was already registered!');
        }
    };

    public $get = (): FormBuilder.IFormBuilderService => {
        return new FormBuilderService(this._, this.formComponents, this.groups);
    };
}
