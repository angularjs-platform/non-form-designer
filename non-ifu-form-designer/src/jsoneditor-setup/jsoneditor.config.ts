export class JSONEditorConfig {

    constructor(
        $windowProvider: any,
        JSONEditor: any,
        _: _.LoDashStatic
    ) {
        'ngInject';
        const $window: any = $windowProvider.$get();
        if (_.isUndefined($window['JSONEditor'])) {
            $window['JSONEditor'] = JSONEditor;
        }
    }

}
