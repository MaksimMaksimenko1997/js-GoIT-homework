import Users from './users.js'; //eslint-disable-line

const getUsersWithFriend = (users, friendName) => {
  const filteredUsers = users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
  return filteredUsers;
};

console.log(getUsersWithFriend(Users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(Users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
