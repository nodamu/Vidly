const morgan = require('morgan');
const helmet = require('helmet');

module.exports = function (app) {
    app.use(helmet());
    app.use(morgan('tiny'));
}