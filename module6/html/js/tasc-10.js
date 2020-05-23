import Users from './users.js'; //eslint-disable-line

const getSortedUniqueSkills = users => {
  const sortedUniqueSkills = users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .filter((value, i, arr) => arr.indexOf(value) === i)
    .sort();
  return sortedUniqueSkills;
};

console.log(getSortedUniqueSkills(Users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
