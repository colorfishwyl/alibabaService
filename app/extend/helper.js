// app/extend/helper.js
module.exports = {
    resultData(code, data, message) {
        this.ctx.body = {
            code,
            data,
            message,
            timestamp: (new Date()).getTime(),
        };
    },
};
