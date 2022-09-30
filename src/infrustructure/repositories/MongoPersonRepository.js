'use strict';


const Person = require('../../core/entities/Person');
const MongooseUser = require('../orm/mongoose/schemas/MongoosePerson');
const PersonRepository = require('../../core/contracts/PersonRepository');

module.exports = class extends PersonRepository {

  constructor() {
    super();
  }

 async get(personId){
  const mongooseUser = await MongooseUser.findById(userId);
  return new Person(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email, mongooseUser.password);
  }

  async list(){
    const mongooseUsers = await MongooseUser.find();
    return mongooseUsers.map(mongooseUser => new Person(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email, mongooseUser.password));
  }

  async create(request){
    const { firstName, lastName, email, password } = request;
    const mongooseUser = await MongooseUser.create({ firstName, lastName, email, password });
    return new Person(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email, mongooseUser.password);
  }

  async update(personId, request){
    const { firstName, lastName, email, password } = request;
    const mongooseUser = await MongooseUser.findByIdAndUpdate(personId, { firstName, lastName, email, password }, { new: true });
    return new Person(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email, mongooseUser.password);
  }

  async delete(personId){
    const mongooseUser = await MongooseUser.findByIdAndDelete(personId);
    return new Person(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email, mongooseUser.password);
  }

 async login (request) {
    const { email, password } = request;
    const mongooseUser = await MongooseUser.findOne({ email, password });
    return new Person(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email, mongooseUser.password);
  }
};
