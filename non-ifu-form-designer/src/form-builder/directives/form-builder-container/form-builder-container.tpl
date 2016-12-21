<div layout="row" layout-padding>
    <non-page-content-wrapper layout="column" title="Draggable Form Components" class="draggable-form-container" flex="25">
        <v-accordion class="vAccordion--default" multiple>
            <v-pane expanded>
                <v-pane-header>
                    Components
                </v-pane-header>
                <v-pane-content>
                    <div class="form-builder-draggable-components" id="form-builder-components">
                        <div ng-repeat="component in vm.groups['Components']" class="formly-field" form-builder-form-component="component" is-simple-component="true">
                        </div>
                    </div>
                </v-pane-content>
            </v-pane>
            <v-pane expanded>
                <v-pane-header>
                    Containers
                </v-pane-header>
                <v-pane-content>
                    <div class="form-builder-draggable-containers" id="form-builder-components-container">
                        <div ng-repeat="component in vm.groups['Containers']" class="formly-field" form-builder-form-component="component" is-simple-component="true"></div>
                    </div>
                </v-pane-content>
            </v-pane>
        </v-accordion>
    </non-page-content-wrapper>
    <div class="non-page-content-wrapper build-form-container" layout="column" flex="75">
        <div layout="column" class="md-whiteframe-4dp" flex>
            <md-toolbar layout="row" layout-align="space-between center" layout-padding>
                <span>Build Form</span>
                <span>
                    <md-button class="md-icon-button" ng-click="vm.reloadBuilderFormFromMetadata($event)" aria-label="Reload From Metadata">
                        <md-icon md-svg-icon="reload" class="icon"></md-icon>
                    </md-button>
                    <md-button class="md-icon-button" ng-click="vm.resetBuilderForm($event)" aria-label="Reset">
                        <md-icon md-svg-icon="delete" class="icon"></md-icon>
                    </md-button>
                </span>
            </md-toolbar>
            <div class="form-builder-top-scroll">
                <div layout="row" layout-align="center center">
                    <div>
                        <md-icon md-svg-icon="chevron-up" class="icon"></md-icon>
                    </div>
                </div>
            </div>
            <md-content class="page-content" id="form-builder-content" non-lean-scroll>
                <div class="form-builder-placeholder"></div>
            </md-content>
            <div class="form-builder-bottom-scroll">
                <div layout="row" layout-align="center center">
                    <div>
                        <md-icon md-svg-icon="chevron-down" class="icon"></md-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
