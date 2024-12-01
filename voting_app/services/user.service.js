const bcrypt = require('bcrypt');
const db = require('../models');

exports.createUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return db.User.create({ ...data, password: hashedPassword });
};

exports.getAllUsers = () => db.User.findAll();

exports.getUserById = (id) => db.User.findByPk(id);

exports.updateUser = (id, data) => db.User.update(data, { where: { id }, returning: true });

exports.deleteUser = (id) => db.User.destroy({ where: { id } });
