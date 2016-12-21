export class JSONEditorConfig {

    constructor(
        $windowProvider: any,
        JSONEditor: any
    ) {
        'ngInject';
        const $window: any = $windowProvider.$get();
        if (!angular.isDefined($window['JSONEditor'])) {
            $window['JSONEditor'] = JSONEditor;
        }
    }

}
