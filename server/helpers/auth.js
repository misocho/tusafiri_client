/* eslint-disable no-console */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT_ROUNDS = 10;
const SECRET_KEY = 'thisissecret';

const hashPassword = async function hashPass(password) {
  const newpassword = await bcrypt.hash(password, SALT_ROUNDS);
  return newpassword;
};

const comparePasswords = async function comparePass(newPassword, storedPassword) {
  const match = await bcrypt.compare(newPassword, storedPassword);
  return match;
};

const generateToken = async (username, id) => {
  const token = await jwt.sign(
    { username, id },
    SECRET_KEY,
  );

  return token;
};


module.exports = { hashPassword, comparePasswords, generateToken };
