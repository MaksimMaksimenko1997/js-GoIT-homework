import Users from './users.js'; //eslint-disable-line

const getUserNames = users => {
  const userNames = users.map(user => user.name);
  return userNames;
};

console.log(getUserNames(Users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// import Users from './users.js'; //eslint-disable-line

// const getUserNames = users => {
//   console.log('oldUsers', users);
//   const userNames = users.map(user => user.name);
//   console.log('newUsers', userNames);
//   return userNames;
// };

// console.log(getUserNames(Users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
