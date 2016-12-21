import {FormBuilder} from '../form-builder';
import {Formly} from '@norn/non-framework';

export class FormMetadataService implements FormBuilder.IFormMetadataService {

    constructor(private _: _.LoDashStatic,
                private FormBuilder: FormBuilder.IFormBuilderService) {
        // Empty
    }

    public getCoreMetadataFromDesigner = (designedForm: {[formObjectGroupId: string]: FormBuilder.FormComponentObjectConfig[]}): {}[] => {
        const designedFormDefault: FormBuilder.FormComponentObjectConfig[] = designedForm['default'];
        const formlyMetadata: {}[] = [];

        this._.forEach(designedFormDefault, (formComponent: FormBuilder.FormComponentObjectConfig): void => {
            formlyMetadata.push(this.extraFormlyFieldFromFormComponent(formComponent));
        });

        return formlyMetadata;
    };

    public getDesignedFormFromMetadata = (mergedMetadata: {}[]): {[formObjectGroupId: string]: FormBuilder.FormComponentObjectConfig[]} => {
        let designedForm: {[formObjectGroupId: string]: FormBuilder.FormComponentObjectConfig[]} = {};

        if (!this._.isEmpty(mergedMetadata)) {
            designedForm['default'] = [];
        }

        this._.forEach(mergedMetadata, (formlyComponent: Formly.IFieldConfigurationObject): void => {
            designedForm['default'].push(this.extractFormComponentFromFormlyField(formlyComponent, designedForm));
        });

        return designedForm;
    };

    public getClientMetadataFromDesigner = (existingCoreMetadata: {}[], designedForm: {[formObjectGroupId: string]: FormBuilder.FormComponentObjectConfig[]}): {}[] => {
        return [];
    };

    public getMergedMetadata = (existingCoreMetadata: {}[], existingClientMetadata: {}[]): {}[] => {
        return [];
    };

    private extractFormComponentFromFormlyField = (
            formlyComponent: Formly.IFieldConfigurationObject | Formly.IFieldGroup,
            designedForm: {[formObjectGroupId: string]: FormBuilder.FormComponentObjectConfig[]}) : FormBuilder.FormComponentObjectConfig => {

        let componentType: string = formlyComponent.wrapper ? formlyComponent.wrapper : (<Formly.IFieldConfigurationObject> formlyComponent).type;

        if (!componentType && (<Formly.IFieldConfigurationObject> formlyComponent).template !== undefined) {
            componentType = 'plainhtml';
        }
        const component: FormBuilder.FormComponentObjectConfig = this._.cloneDeep(this.FormBuilder.formComponents[componentType]);

        component.label = formlyComponent.key ? <string> formlyComponent.key : component.label;
        component.formlyField = formlyComponent;
        component.formObjectId = component.name.concat('_' + Math.floor(Math.random() * 9999))
                                                    .concat('_' + Math.floor(Math.random() * 9999));

        if (component.isWrapper) {
            component.formGroup = designedForm[component.formObjectId] = [];
            this._.forEach((<Formly.IFieldGroup> formlyComponent).fieldGroup, (formlyComponentInner: Formly.IFieldConfigurationObject): void => {
                component.formGroup.push(this.extractFormComponentFromFormlyField(formlyComponentInner, designedForm));
            });
        }

        return component;
    };

    private extraFormlyFieldFromFormComponent = (formComponent: FormBuilder.FormComponentObjectConfig) : any => {
        const formlyField: Formly.IFieldConfigurationObject | Formly.IFieldGroup = formComponent.formlyField;

        if (formComponent.isWrapper) {
            (<Formly.IFieldGroup> formlyField).fieldGroup = [];
            this._.forEach(formComponent.formGroup, (formComponentInner: FormBuilder.FormComponentObjectConfig): void => {
                (<Formly.IFieldGroup> formlyField).fieldGroup.push(this.extraFormlyFieldFromFormComponent(formComponentInner));
            });
        }

        return formlyField;
    }
}
