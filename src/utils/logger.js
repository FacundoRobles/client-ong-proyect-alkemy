import log from 'loglevel';
import remote from 'loglevel-plugin-remote';

const customJSON = logData => ({
    msg: logData.message,
    level: logData.label,
    stacktrace: logData.stacktrace,
    ...logData
});

remote.apply(log, {
    format: customJSON, url: '/logger'
});

log.enableAll();

export default log;
