
// used for validating email syntax
const checkEmail = (email) => {
  let regexp = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;

  if (!regexp.test(email)) console.log("Invalid email syntax!");
  
  return regexp.test(email);
}

module.exports = checkEmail;