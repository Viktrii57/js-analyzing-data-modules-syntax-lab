
const { format } = require('date-fns');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (let arr of args) {
    combinedObject.users = [...combinedObject.users, ...arr];
  }

  const today = new Date();
  combinedObject.merge_date = format(today, '4/14/2026');

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};