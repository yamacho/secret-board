'use strict';

const postHandler = require('./post-handler');

function route(req, res) {
    switch (req.url) {
        case '/posts':
            postHandler.handle(req, res);
            break;
        case '/logout':
            break;
        default:
            break;
    }
}

module.exports = {
    route
};
