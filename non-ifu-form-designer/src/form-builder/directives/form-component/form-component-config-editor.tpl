<md-dialog aria-label="Form Field Configuration Editor" flex>
  <form ng-cloak>
    <md-toolbar>
        <div layout="column" layout-align="center" layout-padding>
            <h5>Edit Field Configuration</h5>
        </div>
    </md-toolbar>

    <md-dialog-content class="scroll-style">
      <div class="md-dialog-content">
        <non-form configuration="vm.formConfiguration"></non-form>
      </div>
    </md-dialog-content>

    <md-dialog-actions>
      <div layout="row" layout-align="right center" layout-margin>
        <md-button class="md-raised md-accent md-ink-ripple" ng-click="vm.cancel()">CANCEL</md-button>
        <md-button class="md-raised md-primary md-ink-ripple" ng-click="vm.save()">SAVE</md-button>
      </div>
    </md-dialog-actions>
  </form>
</md-dialog>
