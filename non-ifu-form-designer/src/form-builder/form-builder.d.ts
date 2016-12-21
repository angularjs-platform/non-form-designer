 import {Formly} from '@norn/non-framework';

 export declare namespace FormBuilder {

    /*
        formComponent:
            It is like a class.
            The base components are textInput; textArea; select; check; radio.
            User can customize the form with dragging and dropping components.
        formObject:
            It is like an object (an instance of the component).
            User can customize the properties like label; description; required and validations etc. of the formObject.
            This formObject is transformed into a formly specific metadata
    */

     interface FormComponentConfig {
        // The name of the Form Component. Should match the formly field config name
        name: string;

        // The Form Component Group.
        group: string;

        // Is it a wrapper component?
        isWrapper?: boolean;

        // The label of the Form Component.
        label: string;

        // Form Component Template to Drag n Drop
        template: string;

        // Form Component Object Template (Only for wrappers)
        objectTemplate?: string;

        // Form Component Properties editor Template
        propertiesEditorTemplate: {}[];
    }

    // Super set of the formly FieldObject Configuration
    // http://docs.angular-formly.com/docs/field-configuration-object
    interface FormComponentObjectConfig extends FormComponentConfig{

        // Below properties are needed only for the builder
        formObjectId?: string;

        // Child Form components if this is a wrapper
        formGroup?: FormComponentObjectConfig[];

        // Formly Field Configuration object
        formlyField?: Formly.IFieldConfigurationObject | Formly.IFieldGroup;
    }

    interface IFormBuilderProvider extends ng.IServiceProvider {
        registerComponent(component: FormComponentConfig): void;
    }

    interface IFormBuilderService {
        formComponents: {[name: string]: FormComponentConfig};
        groups: {[name: string]: FormComponentConfig[]};
        designedForm: {[formObjectGroupId: string]: FormComponentObjectConfig[]};
        generatedMetadataForm: {[formObjectGroupId: string]: FormComponentObjectConfig[]};
        createNewFormGroup(formObjectGroupId: string): FormComponentObjectConfig[];
        insertFormObject(formObjectGroupId: string, index: number, formObject: FormComponentObjectConfig): void;
        removeFormObject(formObjectGroupId: string, index: number): void;
        deleteFormObject(formObjectId: string, isWrapper: boolean): void;
    }

    interface IFormMetadataService {
        getCoreMetadataFromDesigner(designedForm: {[formObjectGroupId: string]: FormComponentObjectConfig[]}): {}[];
        getClientMetadataFromDesigner(existingCoreMetadata: {}[], designedForm: {[formObjectGroupId: string]: FormComponentObjectConfig[]}): {}[];
        getDesignedFormFromMetadata(mergedMetadata: {}[]): {[formObjectGroupId: string]: FormComponentObjectConfig[]};
        getMergedMetadata(existingCoreMetadata: {}[], existingClientMetadata: {}[]): {}[];
    }
}
