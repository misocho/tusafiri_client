/* eslint-disable no-console */
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const hashPassword = async function hashPass(password) {
  const newpassword = await bcrypt.hash(password, SALT_ROUNDS);
  return newpassword;
};


module.exports = hashPassword;
