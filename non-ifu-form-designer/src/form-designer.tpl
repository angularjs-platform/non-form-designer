<div layout="column" class="non-form-designer" flex non-lean-scroll>
    <md-tabs md-no-pagination md-dynamic-height md-stretch-tabs="always" md-border-bottom>
        <md-tab md-on-select="vm.loadMetadataEditorTab()">
            <md-tab-label><span>Form Metadata JSON</span></md-tab-label>
            <md-tab-body>
                <div layout="row" layout-align="center center" ng-show="vm.isLoading['metadata']" layout-padding layout-margin>
                    <md-progress-circular md-mode="indeterminate" md-diameter="48" ng-disabled="!vm.isLoading['metadata']"></md-progress-circular>
                </div>
                <div layout="row" layout-padding ng-show="!vm.isLoading['metadata']">
                    <div layout="column" flex>
                        <div ng-jsoneditor class="md-whiteframe-4dp json-editor" ng-model="vm.editorCoreMetadata" options="{ mode: 'code' }"></div>
                    </div>
                </div>
                <!-- Enable this when working on Client Metadata (SDK)
                <div layout="row" class="metadata-tab" layout-padding ng-show="!vm.isLoading['metadata']">
                    <div layout="column" flex>
                        <h3 layout="row" layout-align="center center">Core</h3>
                        <div ng-jsoneditor class="md-whiteframe-4dp json-editor" ng-model="vm.editorCoreMetadata" options="vm.codeEditorOptions"></div>
                    </div>
                    <div layout="column" flex>
                        <h3 layout="row" layout-align="center center"><span><md-switch ng-model="vm.clientMode" aria-label="Client Mode"
                            ng-change="vm.changeClientMode()">Client</md-switch></span></h3>
                        <div ng-jsoneditor class="md-whiteframe-4dp json-editor" ng-model="vm.editorClientMetadata" options="vm.codeEditorOptions"></div>
                    </div>
                </div>-->
            </md-tab-body>
        </md-tab>
        <md-tab md-on-select="vm.loadFormDesignerTab()">
            <md-tab-label><span>Form Builder</span></md-tab-label>
            <md-tab-body>
                <div layout="row" layout-align="center center" ng-show="vm.isLoading['designer']" layout-padding layout-margin>
                    <md-progress-circular md-mode="indeterminate" md-diameter="48" ng-disabled="!vm.isLoading['designer']"></md-progress-circular>
                </div>
                <div ng-show="!vm.isLoading['designer']">
                    <form-builder-container></form-builder-container>
                </div>
            </md-tab-body>
        </md-tab>
        <md-tab md-on-select="vm.loadFormPreviewTab()">
            <md-tab-label><span>Form Preview</span> </md-tab-label>
            <md-tab-body >
                <div layout="row" layout-align="center center" ng-show="vm.isLoading['preview']" layout-padding layout-margin>
                    <md-progress-circular md-mode="indeterminate" md-diameter="48" ng-disabled="!vm.isLoading['preview']"></md-progress-circular>
                </div>
                <div layout-padding ng-show="!vm.isLoading['preview']">
                    <div class="non-page-content-wrapper" layout="column">
                        <div layout="column" class="md-whiteframe-4dp" flex>
                            <md-toolbar layout="row" layout-align="space-between center" layout-padding>
                                <span>Form Title</span>
                                <span><md-switch ng-model="vm.formPreviewReadonly" aria-label="Form Preview ReadOnly" ng-change="vm.changeFormPreviewMode()">Readonly</md-switch></span>
                            </md-toolbar>
                            <md-content class="page-content" non-lean-scroll>
                                <non-form configuration="vm.formConfiguration"></non-form>
                            </md-content>
                        </div>
                    </div>
                </div>
            </md-tab-body>
        </md-tab>
        <md-tab md-on-select="vm.loadModelEditorTab()">
            <md-tab-label><span>Form Model JSON</span></md-tab-label>
            <md-tab-body>
                <div layout="row" layout-align="center center" ng-show="vm.isLoading['model']" layout-padding layout-margin>
                    <md-progress-circular md-mode="indeterminate" md-diameter="48" ng-disabled="!vm.isLoading['model']"></md-progress-circular>
                </div>
                <div layout="row" layout-padding ng-show="!vm.isLoading['model']">
                    <div layout="column" flex>
                        <div ng-jsoneditor class="md-whiteframe-4dp model-editor" ng-model="vm.formConfiguration.model" options="{ mode: 'code' }"></div>
                    </div>
                </div>
            </md-tab-body>
        </md-tab>
    </md-tabs>
</div>
