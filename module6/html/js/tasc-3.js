import Users from './users.js'; //eslint-disable-line

const getUsersWithGender = (users, gender) => {
  const usersWithSameGender = users
    .filter(user => user.gender === gender)
    .map(user => user.name);
  return usersWithSameGender;
};

console.log(getUsersWithGender(Users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
