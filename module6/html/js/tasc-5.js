import Users from './users.js'; //eslint-disable-line

const getUserWithEmail = (users, email) => {
  const usersEmail = users.find(user => user.email === email);
  return usersEmail;
};

console.log(getUserWithEmail(Users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(Users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
