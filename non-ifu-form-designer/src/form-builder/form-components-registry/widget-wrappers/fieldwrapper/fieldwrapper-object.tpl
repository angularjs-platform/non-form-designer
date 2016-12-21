<div dragular="vm.dragularOptions" id="{{vm.component.formObjectId}}"  class="form-builder-component-wrapper-container fieldwrapper" layout-wrap>
    <div ng-repeat="componentObject in vm.component.formGroup track by componentObject.formObjectId" class="formly-field"
            form-builder-form-component="componentObject" parent-scope="vm.parentScope" is-wrapper="{{componentObject.isWrapper}}"></div>
</div>
