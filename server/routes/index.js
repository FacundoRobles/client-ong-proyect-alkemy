/* eslint-disable lodash/import-scope */
const {Router} = require('express');

const i18n = require('./i18n');

module.exports = app => {
    app.use('/i18n', i18n(Router()));

    app.get('/activate/:token', (req, res) => res.redirect(`/#${req.url}`));
    app.get('/recovery-password/:token', (req, res) => res.redirect(`/#${req.url}`));
};
