const mongoose = require('mongoose');

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function () {
  console.log('query about to run');
  const key = { ...this.getQuery(), collection: this.mongooseCollection.name };
  console.log(key);
  return exec.apply(this, arguments);
};
