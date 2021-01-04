export default new class Validation {

  // checks if email is a valid email
  email = (email: string) =>
    email.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/i);

  // checks if password contains only letters and numbers and its length is longer than or equal to 6 characters
  passwordToReg = (password: string) => {
    const validPassword = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/;
    if (!validPassword.test(password) || password.length < 6) return false;
    return true;
  };

  // checks if password contains at least 1 character
  passwordToLog = (password: string) =>
    password.length > 0;

  // checks if name contains at least 3 characters
  name = (name: string) => name.length >= 3;

};

