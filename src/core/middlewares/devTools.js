/* eslint-disable global-require */
if (process.env.NODE_ENV === 'development') {
    module.exports = require('./reactotron');
} else {
    module.exports = {
        reactotronEnhancer: null,
        sagaMonitor: null
    };
}
