const moduleName: string = 'non.container.form-designer';

// SCSS
import './scss/theme-base.scss';

// Favicon
import './favicon.ico';

// Internal modules
import app from './app/app.module';

angular.module(moduleName, [
    'non.framework',
    'non.theme-base',
    'non.ifu.form-designer',
    app]);
