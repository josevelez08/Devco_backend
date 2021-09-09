/**
 * @file index.js
 * @summary Initiate and expose routes
 * */
const user = require('./user');
const questions = require('./questions')

const initiateRoutes = router => {
    // all modules with routes will be added here
    user(router);
    questions(router);
};

module.exports = initiateRoutes;