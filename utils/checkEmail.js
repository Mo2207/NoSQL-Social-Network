
// used for validating email syntax
const checkEmail = (email) => {
  let regexp = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
  return regexp.test(email);
}

module.exports = checkEmail;