import Users from './users.js'; //eslint-disable-line

const getUsersWithAge = (users, min, max) => {
  const userAge = users.filter(user => user.age >= min && user.age <= max);
  return userAge;
};

console.log(getUsersWithAge(Users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(Users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
