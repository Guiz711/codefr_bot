const fancyLog = require("fancy-log");


/**
 * @param msg
 */
module.exports.info = function (msg) {
    return fancyLog.info(msg);
};

/**
 * @param msg
 */
module.exports.err = function (msg) {
    return fancyLog.error(msg);
};