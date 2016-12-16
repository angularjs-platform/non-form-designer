var localizationValues = require('./localization.json');

function getLocalization(req, res, next) {
    res.json(localizationValues);
}

var apiEndpoints = {
    mainUrl: '',
    routes: [{
        method: 'GET',
        url: '/locale/login',
        callback: getLocalization
    }]
};

module.exports = apiEndpoints;
