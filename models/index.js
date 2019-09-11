const Sequelize = require('sequelize');


const db = new Sequelize({
  database: 'mycontacts_db',
  dialect: 'postgres'
});


const Contact = db.define('contact', {
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.TEXT
  }
});

module.exports = {
  db,
  Contact
}