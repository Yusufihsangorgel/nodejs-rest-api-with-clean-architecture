'use strict';

const PersonRepository = require('../infrustructure/repositories/PersonRepository');
const MongoPersonRepository = require('../infrustructure/repositories/MongoPersonRepository');
const constants = require('../config/constants');
const environment = require('../config/environment');

function services() {
    const services = {};

    // services.personRepository = new PersonRepository();
    if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
        services.personRepository = new MongoPersonRepository();
    } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.MYSQL) {
        services.personRepository = new PersonRepository();
    }
    else {
        throw new Error('Database dialect not supported');
    }
    return services;
}

module.exports = services();
