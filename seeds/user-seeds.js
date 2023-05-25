const { User } = require('../models');

const userData = [
  {
    username: "john_doe",
    twitter: "johndoe",
    github: "johndoe",
    email: "john.doe@example.com",
    password: "password1"
  },
  {
    username: "jane_smith",
    twitter: "janesmith",
    github: "janesmith",
    email: "jane.smith@example.com",
    password: "password2"
  },
  {
    username: "alex_wilson",
    twitter: "alexwilson",
    github: "alexwilson",
    email: "alex.wilson@example.com",
    password: "password3"
  },
  {
    username: "sarah_johnson",
    twitter: "sarahjohnson",
    github: "sarahjohnson",
    email: "sarah.johnson@example.com",
    password: "password4"
  },
  {
    username: "michael_brown",
    twitter: "michaelbrown",
    github: "michaelbrown",
    email: "michael.brown@example.com",
    password: "password5"
  },
  {
    username: "lisa_davis",
    twitter: "lisadavis",
    github: "lisadavis",
    email: "lisa.davis@example.com",
    password: "password6"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;