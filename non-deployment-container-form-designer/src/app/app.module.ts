const moduleName: string = 'non.container.form-designer.app';

import {UIRouterConfig} from './app.routes';
import {HTTPConfig} from './app.http.config';
import {Run} from './app.run';
import {LocalizationConfig} from './app.localization.config';
import {LoadingBarConfig} from './app.loading-bar.config';
import {LocalStorageConfig} from './app.localstorage.config';
import {ThemeConfig} from './app.theme.config';

angular.module(moduleName, [])
    .run(Run)
    .config(UIRouterConfig)
    .config(HTTPConfig)
    .config(LocalizationConfig)
    .config(LoadingBarConfig)
    .config(LocalStorageConfig)
    .config(ThemeConfig);

export default moduleName;
