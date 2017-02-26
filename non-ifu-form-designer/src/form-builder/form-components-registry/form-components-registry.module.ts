import * as angular from 'angular';

const moduleName: string = 'non.ifu.form-designer.form-builder.form-components-registry';

// Widgets
import inputWidget from './widgets/input/input.module';
import checkboxWidget from './widgets/checkbox/checkbox.module';
import radiobuttonWidget from './widgets/radiobutton/radiobutton.module';
import selectWidget from './widgets/select/select.module';
import switchWidget from './widgets/switch/switch.module';
import textareaWidget from './widgets/textarea/textarea.module';
import datepickerWidget from './widgets/datepicker/datepicker.module';
import buttonWidget from './widgets/button/button.module';
import multiSelectWidget from './widgets/multiselect/multiselect.module';
import submitButtonWidget from './widgets/submit-button/submit-button.module';
import lookupWidget from './widgets/lookup/lookup.module';
import divider from './widgets/divider/divider.module';
import plainhtml from './widgets/plainhtml/plainhtml.module';

// Widget Wrappers
import fieldsetWrapper from './widget-wrappers/fieldset/fieldset.module';
import fieldwrapper from './widget-wrappers/fieldwrapper/fieldwrapper.module';


angular.module(moduleName, [
                    // Widgets
                    inputWidget, checkboxWidget, radiobuttonWidget, selectWidget, switchWidget,
                    textareaWidget, datepickerWidget, buttonWidget, submitButtonWidget,
                    multiSelectWidget, lookupWidget, divider, plainhtml,

                    // Widget Wrappers
                    fieldsetWrapper, fieldwrapper]);

export default moduleName;
