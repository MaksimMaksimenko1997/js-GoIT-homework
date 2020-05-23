import Users from './users.js'; //eslint-disable-line

const calculateTotalBalance = users => {
  const totalBalance = users
    .map(user => user.balance)
    .reduce((acc, value) => acc + value, 0);
  return totalBalance;
};

console.log(calculateTotalBalance(Users)); // 20916
