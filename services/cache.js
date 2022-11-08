const mongoose = require('mongoose');

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function () {
  console.log('query about to run');

  return exec.apply(this, arguments);
};
