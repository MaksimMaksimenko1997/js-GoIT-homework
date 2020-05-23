import Users from './users.js'; //eslint-disable-line

const getUsersWithEyeColor = (users, color) => {
  const usersWithSameEyeColor = users.filter(user => user.eyeColor === color);
  return usersWithSameEyeColor;
};

console.log(getUsersWithEyeColor(Users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
