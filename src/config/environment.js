'use strict';

const constants = require('./constants');

module.exports = (() => {

    const environment = {
        database: {
            username: "",
            password: "",
            database: "",
            host: "",
            dialect: process.env.DATABASE_DIALECT || constants.SUPPORTED_DATABASE.MONGO,// database choice
            url: process.env.DATABASE_URI || '', // mongodb connection string
        } 
    };

    if (process.env.NODE_ENV === 'dev') {

    }

    return environment;
})();