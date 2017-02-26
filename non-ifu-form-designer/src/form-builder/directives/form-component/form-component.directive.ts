import {FormBuilderFormComponentController} from './form-component.controller';

export class FormBuilderFormComponentDirective implements ng.IDirective {

    restrict = 'A';
    scope = {
        component: '=formBuilderFormComponent',
        isSimpleComponent: '=isSimpleComponent',
        parentScope: '=parentScope'
    };
    controller = FormBuilderFormComponentController;
    controllerAs = 'vm';
    bindToController = true;

    static instance($compile: ng.ICompileService): any {
        'ngInject';

        return new FormBuilderFormComponentDirective($compile);
    }

    constructor(private $compile: ng.ICompileService) {
        'ngInject';
        // Empty
    }

    link(scope: any, element: any, attrs: any): any {
        if (scope.vm.isSimpleComponent || !scope.vm.component.isWrapper) {
            return scope.$watch('vm.component.template', (template: any): any => {
                return element.html(this.$compile(this.appendHandlesToTemplate(scope, template, element))(scope));
            });
        }
        else {
            return scope.$watch('vm.component.objectTemplate', (template: any): any => {
                    return element.html(this.$compile(this.appendHandlesToTemplate(scope, template, element))(scope));
            });
        }
    }

    private appendHandlesToTemplate = (scope: any, template: string, element: any): string => {
        let wrapper: string = '<div class="form-builder-component">';

        let dragHandle: string = '<div layout="row" layout-align="end center"><div class="handle-icons">';

        if (scope.vm.isSimpleComponent) {
            dragHandle = dragHandle.concat('<md-icon md-svg-icon="cursor-move" class="handle" aria-label="Move"></md-icon></div></div>');
        }
        else if (scope.vm.component.isWrapper && (element[0] && element[0].classList.contains('no-delete'))) {

            dragHandle = dragHandle.concat('</div></div>');
        }
        else {
            dragHandle = dragHandle.concat('<md-icon md-svg-icon="cursor-move" class="handle" aria-label="Move"></md-icon>')
                                   .concat('<md-button class="md-icon-button" ng-click="vm.edit()" aria-label="edit"><md-icon md-svg-icon="pencil" class="icon"></md-icon></md-button>')
                                   .concat('<md-button class="md-icon-button" ng-click="vm.delete()" aria-label="delete"><md-icon md-svg-icon="close" class="icon"></md-icon></md-button></div></div>');
        }

        wrapper = wrapper.concat(dragHandle).concat(template).concat('</div>');
        return wrapper;
    }
}
