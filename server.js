const Sequelize = require('sequelize');

const sequelize = new Sequelize('tech_blog_db', 'your_username', 'your_password', {
});

// Tests the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;