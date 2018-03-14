const fancyLog = require("fancy-log");

/**
 * @param msg
 */
module.exports.info = msg => {
    return fancyLog.info(msg);
};

/**
 * @param msg
 */
module.exports.err = msg => {
    return fancyLog.error(msg);
};
