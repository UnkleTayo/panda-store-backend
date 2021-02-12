import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123455', 10),
    isAdmin: true,
  },

  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123455', 10),
  },

  {
    name: 'Lex Luthor',
    email: 'lex@example.com',
    password: bcrypt.hashSync('123455', 10),
  },

  {
    name: 'Jean Doe',
    email: 'le@example.com',
    password: bcrypt.hashSync('123455', 10),
  },
];

export default users;
