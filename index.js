/* eslint-disable lodash/prefer-lodash-method, global-require, camelcase */
require('dotenv').config({path: `${__dirname}/.env`});
const webpack = require('webpack');
const fetch = require('node-fetch');
const express = require('express');
const fs = require('fs');

const {
    PORT,
    NODE_ENV,
    API,
    CLIENT_ID,
    CLIENT_SECRET
} = process.env;

const requestToken = async () => {
    const response = await fetch(
        `${API}public-api/token-app`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET
            })
        }
    );
    const {accessToken} = await response.json();
    process.env.TOKEN = accessToken;
};

const publicPath = `${__dirname}/dist`;

const logger = require('./server/helpers/logger');


const app = express();
const internalApp = express();


app.use(internalApp);
const startApp = () => app.listen(PORT, () => logger.info(`\nApp running on port ${PORT} in ${NODE_ENV} environment`));
logger.info(`\nApp running on port ${PORT} in ${NODE_ENV} environment`)
if (NODE_ENV === 'development') {
    (async () => {
        try {
            fs.rmdirSync(publicPath, {recursive: true});
        // eslint-disable-next-line
        } catch (err) {}
        // await requestToken();
        const middleware = require('webpack-dev-middleware');
        const compiler = webpack(require('./webpack.config'));

        const webpackApp = express();
        webpackApp.use(express.static(publicPath));
        webpackApp.use('*', express.static(publicPath));

        webpackApp.use(middleware(compiler, {
            methods: ['GET', 'POST', 'HEAD', 'PUT', 'DELETE'],
            writeToDisk: false
        }));

        webpackApp.use(require('webpack-hot-middleware')(compiler));
        app.use(webpackApp);
        startApp();
    })();
}

if (NODE_ENV !== 'development') {
    app.use((_, res, next) => {
        res.set('Cache-control', 'no-cache');
        res.removeHeader('X-Powered-By');
        next();
    });
    app.use(express.static(publicPath));
    app.use('*', express.static(publicPath));
    (async () => {
        try {
            fs.rmdirSync(publicPath, {recursive: true});
        // eslint-disable-next-line
        } catch (err) {}
        fs.mkdirSync(publicPath);
        await requestToken();
        await new Promise((resolve, reject) => {
            webpack(require('./webpack.config.prod')).run((err, stats) => {
                if (err || stats.hasErrors()) {
                    logger.error(stats.toString());
                    logger.error(stats.hasErrors());
                    reject(Error('Webpack Failed'));
                    return;
                }
                logger.info('Dist builded');
                resolve();
            });
        });
        startApp();
    })();
}
