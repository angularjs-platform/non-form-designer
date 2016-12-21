import {FormBuilder} from '../../form-builder';
import {Formly} from '@norn/non-framework';
import {FormBuilderFormComponentEditorController} from './form-component-config-editor.controller';

export class FormBuilderFormComponentController {

    public component: FormBuilder.FormComponentObjectConfig;
    public isSimpleComponent: boolean;
    public parentScope: ng.IScope;
    public dragularOptions: Object;

    constructor(private _: _.LoDashStatic,
                private FormBuilder: FormBuilder.IFormBuilderService,
                private $mdDialog: ng.material.IDialogService) {
        'ngInject';

        if (!this.isSimpleComponent) {
            this.component.formlyField = this._.isEmpty(this.component.formlyField) ? {} : this.component.formlyField;

            if (this.component.isWrapper) {
                this.component.formlyField.wrapper = this.component.name;

                if (!this._.isArray(this.component.formGroup)) {
                    this.component.formGroup = FormBuilder.createNewFormGroup(this.component.formObjectId);
                }

                this.dragularOptions = {
                    containersModel: this.component.formGroup,
                    revertOnSpill: true,
                    removeOnSpill: false,
                    scope: this.parentScope,
                    moves: (element: any, container: any, handle: any): boolean =>  {
                        return handle.classList.contains('handle');
                    },
                    accepts: (element: any, target: any, source: any, sibling: any): boolean => {
                        if (element && !element.querySelector('#' + this.component.formObjectId)) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                };
            }
            else {
               if (this.component.name !== 'plainhtml') {
                   (<Formly.IFieldConfigurationObject> this.component.formlyField).type = this.component.name;
               }
               else {
                   if (!(<Formly.IFieldConfigurationObject> this.component.formlyField).template) {
                       (<Formly.IFieldConfigurationObject> this.component.formlyField).template = '';
                   }
               }
            }
        }
        else {
             this.component = this._.cloneDeep(this.component);
        }
    }

    public edit = (event: any): void => {
       this.$mdDialog.show({
            controller: FormBuilderFormComponentEditorController,
            bindToController: true,
            controllerAs: 'vm',
            template: require('./form-component-config-editor.tpl'),
            targetEvent: event,
            locals: {component: this._.cloneDeep(this.component)}
        })
        .then((formlyConfig: any): void => {
            this.component.formlyField = this._.cloneDeep(formlyConfig);
            if (this.component.formlyField.key) {
                this.component.label =  this.component.formlyField.templateOptions && this.component.formlyField.templateOptions.label
                        ? this.component.formlyField.templateOptions.label : <string> this.component.formlyField.key;
            }
        });
    };

    public delete = (event: any): void => {
        this.FormBuilder.deleteFormObject(this.component.formObjectId, this.component.isWrapper);
    };
}
