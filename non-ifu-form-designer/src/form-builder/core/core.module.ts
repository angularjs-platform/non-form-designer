const moduleName: string = 'non.ifu.form-designer.form-builder.core';

// Providers
import {FormBuilderProvider} from './form-builder.provider';

// Services
import {FormMetadataService} from './form-metadata.service';

angular.module(moduleName, [])
    .provider('FormBuilder', FormBuilderProvider)
    .service('FormMetadataService', FormMetadataService);

export default moduleName;
