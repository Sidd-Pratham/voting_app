const bcrypt = require('bcrypt');
const db = require('./models');

const seedAdmin = async () => {
  const adminExists = await db.User.findOne({ where: { role: 'admin' } });

  if (!adminExists) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await db.User.create({
      name: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword,
      role: 'admin',
    });
    console.log('Admin user created.');
  } else {
    console.log('Admin user already exists.');
  }
};

seedAdmin();
