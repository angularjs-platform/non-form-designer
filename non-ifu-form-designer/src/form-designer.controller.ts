import { FormConfiguration, IFormDisplayState } from '@norn/non-framework';
import { FormBuilder } from './form-builder/form-builder';

export class FormDesignerIFUController {

    public editorCoreMetadata: {}[];
    public editorClientMetadata: {}[];
    public editorModel: {};
    public formConfiguration: FormConfiguration;
    public formPreviewReadonly: boolean;
    public isLoading: {};
    public clientMode: boolean;

    constructor(private FormDisplayState: IFormDisplayState,
                private FormBuilder: FormBuilder.IFormBuilderService,
                private $scope: ng.IScope,
                private _: _.LoDashStatic,
                private FormMetadataService: FormBuilder.IFormMetadataService,
                private $timeout: ng.ITimeoutService) {
        'ngInject';

        this.formPreviewReadonly = false;
        this.isLoading = {};
        this.editorCoreMetadata = [];
        this.editorClientMetadata = [];
        this.clientMode = false;

        this.formConfiguration = {
            model: {},
            fields: [],
            options: {
                formState: {
                    displayState: this.FormDisplayState.create,
                    viewManager: {}
                }
            }
        };
    }

    public loadMetadataEditorTab = (): void => {
        this.progressIndicator('metadata');

        if (!this._.isEmpty(this.FormBuilder.designedForm['default'])) {
            if (this.clientMode) {
                this.editorClientMetadata = this.FormMetadataService.getClientMetadataFromDesigner(this.editorCoreMetadata, this.FormBuilder.designedForm);
            }
            else {
                this.editorCoreMetadata = this.FormMetadataService.getCoreMetadataFromDesigner(this.FormBuilder.designedForm);
            }
        }
    };

    public loadFormDesignerTab = (): void => {
        this.progressIndicator('designer');

        let mergedMetadata: {}[];
        if (this.clientMode) {
            mergedMetadata = this.FormMetadataService.getMergedMetadata(this.editorCoreMetadata, this.editorClientMetadata);
        }
        else {
            mergedMetadata = this.editorCoreMetadata;
        }

        this.FormBuilder.generatedMetadataForm = this.FormMetadataService.getDesignedFormFromMetadata(mergedMetadata);

        this.$scope.$broadcast('FormDesignerLoaded');
    };

    public loadFormPreviewTab = (): void => {
        this.progressIndicator('preview');

        let mergedMetadata: {}[];
        if (this.clientMode) {
            mergedMetadata = this.FormMetadataService.getMergedMetadata(this.editorCoreMetadata, this.editorClientMetadata);
        }
        else {
            mergedMetadata = this.editorCoreMetadata;
        }

        this.formConfiguration.fields = this._.cloneDeep(mergedMetadata);
    };

    public loadModelEditorTab = (): void => {
        this.progressIndicator('model');
    };

    public changeFormPreviewMode = (): void => {
        if (this.formPreviewReadonly) {
            this.formConfiguration.options.formState.displayState = this.FormDisplayState.view;
        }
        else {
            this.formConfiguration.options.formState.displayState = this.FormDisplayState.create;
        }
    };

    public changeClientMode = (): void => {
        if (!this.clientMode) {
            this.editorClientMetadata = [];
        }
    };

    private progressIndicator = (screen: string): void => {
        this.isLoading[screen] = true;
        this.$timeout((): void => {
            this.isLoading[screen] = false;
        }, 100);
    };
}
