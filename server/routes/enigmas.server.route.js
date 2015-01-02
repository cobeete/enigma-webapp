'use strict';

var enigmas = require('../../server/controllers/enigmas.server.controller');

module.exports = function(app) {
    app.route('/enigmas')
        .post(enigmas.create)
        .get(enigmas.list);
};
