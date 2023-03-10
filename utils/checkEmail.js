
// used for validating email syntax
const checkEmail = (email) => {
  let regexp = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})$/);

  if (!regexp.test(email)) {
    console.log("Invalid email syntax!");
  } else {
    console.log("email syntax passed!");
  }
  
  return regexp.test(email);
}

module.exports = checkEmail;