import Users from './users.js'; //eslint-disable-line

const getInactiveUsers = users => {
  const innactiveUsers = users.filter(user => !user.isActive);
  return innactiveUsers;
};

console.log(getInactiveUsers(Users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
