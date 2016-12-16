#Description
The package for the NoN Form designer

#Setup
    cd non-build-manager
    npm link 

    cd ../non-framework
    npm link

    cd ../non-themes/non-theme-base
    npm link

    cd ../../non-form-designer/non-ifu-form-designer
    npm link @norn/non-framework
    npm link

    cd ../non-deployment-container-form-designer
    npm link @norn/non-framework
    npm link @norn/non-build-manager
    npm link @norn/non-ifu-form-designer
    npm link @norn/non-theme-base
    npm run watch
