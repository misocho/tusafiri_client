const mongoose = require('mongoose');
const hashPassword = require('../../../utils/helpers');

const { Schema } = mongoose;
// The user model
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
    index: { unique: true },
  },
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    require: true,
  },
});

UserSchema.pre('save', async function preSave(next) {
  const user = this;
  if (user.password) {
    const newPassword = await hashPassword(user.password);
    user.password = newPassword;
    next();
  }
  next();
});

module.exports = mongoose.model('User', UserSchema);
