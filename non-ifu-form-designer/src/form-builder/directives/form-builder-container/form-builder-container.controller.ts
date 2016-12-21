import {FormBuilder} from '../../form-builder';

export class FormBuilderContainerController {

    public groups: {[name: string]: FormBuilder.FormComponentConfig[]};
    public formComponents: {[name: string]: FormBuilder.FormComponentObjectConfig};
    private builderScope: ng.IScope;

    constructor(private FormBuilder: FormBuilder.IFormBuilderService,
                private dragularService: any,
                private $element: any,
                public $scope: ng.IScope,
                private _: _.LoDashStatic,
                private $compile: ng.ICompileService,
                private $: any,
                private $mdDialog: ng.material.IDialogService,
                private  $interval: ng.IIntervalService) {
        'ngInject';

        this.groups = this._.cloneDeep(FormBuilder.groups);
        this.formComponents = this._.cloneDeep(FormBuilder.formComponents);
        this.formComponents['fieldwrapper'].formObjectId = 'default';

        this.loadBuilderForm();
        this.registerDragScrollEvents('top');
        this.registerDragScrollEvents('bottom');

        this.$scope.$on('dragulardrop', (event: any, element: any,
            targetContainer: any, sourceContainer: any, sourceModel: any, sourceIndex: any, targetModel: any, targetIndex: any): any => {

            event.stopPropagation();

            // Assign formObjectId to the dropped component
            let draggedComponent: FormBuilder.FormComponentObjectConfig;

            // Check if the source and target are same
            if (!sourceModel && !targetModel) {
                const storedSourceModel: FormBuilder.FormComponentObjectConfig[] = this.FormBuilder.designedForm[sourceContainer.id];

                if (!storedSourceModel || !storedSourceModel[sourceIndex] || !storedSourceModel[sourceIndex].formObjectId) {
                    console.error('ERROR: storedSourceModel or the dragged component are not defined');
                }
                else {
                    draggedComponent = storedSourceModel[sourceIndex];

                    // Update the Stored Models
                    FormBuilder.removeFormObject(sourceContainer.id, sourceIndex);
                    targetIndex = FormBuilder.insertFormObject(targetContainer.id, targetIndex, draggedComponent);

                    // Set back the updated Stored models to Dragular Models
                    sourceModel = this._.cloneDeep(this.FormBuilder.designedForm[sourceContainer.id]);
                    targetModel = this._.cloneDeep(this.FormBuilder.designedForm[targetContainer.id]);
                }
            }
            else if (targetContainer.id === sourceContainer.id) {
                draggedComponent = sourceModel[targetIndex];
            }
            else {
                draggedComponent = targetModel[targetIndex];
            }

            if (!draggedComponent.formObjectId) {
                draggedComponent.formObjectId = draggedComponent.name.concat('_' + Math.floor(Math.random() * 9999))
                                                        .concat('_' + Math.floor(Math.random() * 9999));
            }

            console.log('Final Designed Form: ', this.FormBuilder.designedForm);
        });

        const FormDesignerLoadedListner: any = this.$scope.$on('FormDesignerLoaded', (event: any): void => {

            this.dragularService(
                [
                    this.$element.find('.form-builder-draggable-components')[0],
                    this.$element.find('.form-builder-draggable-containers')[0]
                ],
                {
                    copy: true,
                    containersModel: [
                        this.groups['Components'],
                        this.groups['Containers']
                    ],
                    accepts: (element: any, target: any, source: any, sibling: any): boolean => {
                        return false;
                    },
                    scope: this.$scope,
                    moves: (element: any, container: any, handle: any): boolean =>  {
                        return handle.classList.contains('handle');
                    }
                }
            );

            // De-register the Listner
            FormDesignerLoadedListner();
        });
    }

    public loadBuilderForm = (): void => {
        this.createBuilder();
    };

    public reloadBuilderFormFromMetadata = (event: any): void => {
        this.$mdDialog.show(this.$mdDialog.confirm()
          .title('Would you like to reload the designed form from Metadata?')
          .textContent('Current designed form will be replaced!')
          .ariaLabel('Reload')
          .targetEvent(event)
          .ok('RELOAD')
          .cancel('CANCEL')).then((): void => {
            this.destroyBuilder();

            this.FormBuilder.designedForm = this._.cloneDeep(this.FormBuilder.generatedMetadataForm);

            this.createBuilder();
        });
    };

    public resetBuilderForm = (event: any): void => {
        this.$mdDialog.show(this.$mdDialog.confirm()
          .title('Would you like to reset the designed form?')
          .textContent('You will lose all the configuration!')
          .ariaLabel('Reset')
          .targetEvent(event)
          .ok('RESET')
          .cancel('CANCEL')).then((): void => {
            this.destroyBuilder();

            this.FormBuilder.designedForm = {};

            this.createBuilder();
        });
    };

    private destroyBuilder = (): void => {
        // Destroy the scope and remove the unwanted element
        this.builderScope.$destroy();
        this.$('.form-builder-placeholder').empty();

        this.formComponents = this._.cloneDeep(this.FormBuilder.formComponents);
        this.formComponents['fieldwrapper'].formObjectId = 'default';
    };

    private createBuilder = (): void => {
        // Create new scope and add the
        this.builderScope = this.$scope.$new();
        this.$('.form-builder-placeholder').append(
                this.$compile('<div class="formly-field no-delete" form-builder-form-component="vm.formComponents[\'fieldwrapper\']" parent-scope="vm.$scope"></div>')(this.builderScope));
    };

    private registerDragScrollEvents = (position: string): void => {
        const speed: number = 20;
        let timer: any;
        let bar: any;
        const container: any = document.getElementById('form-builder-content');
        let inc: number;
        let running: boolean;

        if (position === 'top') {
            bar = this.$('.form-builder-top-scroll');
            inc = -5;
        }
        else {
            bar = this.$('.form-builder-bottom-scroll');
            inc = 5;
        }

        bar.on('dragularenter', (): void => {
            if (!running) {
                running = true;
                container.scrollTop += inc;
                timer = this.$interval((): void => {
                    container.scrollTop += inc;
                }, speed);
            }
        });

        bar.on('dragularleave dragularrelease', (): void => {
            running = false;
            this.$interval.cancel(timer);
        });
    };
}
