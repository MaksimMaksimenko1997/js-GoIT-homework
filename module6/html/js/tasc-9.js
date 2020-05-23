import Users from './users.js'; //eslint-disable-line

const getNamesSortedByFriendsCount = users => {
  const sortedByFriendsCount = users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
  return sortedByFriendsCount;
};

console.log(getNamesSortedByFriendsCount(Users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
