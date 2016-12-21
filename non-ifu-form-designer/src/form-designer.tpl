<div layout="column" class="non-form-designer" flex>
    <md-tabs md-no-pagination md-swipe-content md-dynamic-height md-stretch-tabs="always" md-border-bottom>
        <md-tab>
            <md-tab-label><span>Form Metadata JSON</span></md-tab-label>
            <md-tab-body>
                <md-content class="scrollable" layout-margin non-lean-scroll>
                    <div layout-padding>
                        <div ng-jsoneditor ng-model="vm.metadata" options="vm.editorOptions" style="width: 400px; height: 300px;"></div>
                    </div>
                </md-content>
            </md-tab-body>
        </md-tab>
        <md-tab>
            <md-tab-label><span>Form Designer</span></md-tab-label>
            <md-tab-body>
                <md-content class="scrollable"  non-lean-scroll>
                    <div layout-padding>Form Designer</div>
                </md-content>
            </md-tab-body>
        </md-tab>
        <md-tab>
            <md-tab-label><span>Form Preview</span></md-tab-label>
            <md-tab-body>
                <md-content class="scrollable"  non-lean-scroll>
                    <div layout-padding>Form Preview</div>
                </md-content>
            </md-tab-body>
        </md-tab>
        <md-tab>
            <md-tab-label><span>Form Model</span></md-tab-label>
            <md-tab-body>
                <md-content class="scrollable"  non-lean-scroll>
                    <div layout-padding>Form Model</div>
                </md-content>
            </md-tab-body>
        </md-tab>
    </md-tabs>
</div>
