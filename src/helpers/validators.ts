const emailRegex = /\S+@\S+\.\S+/;
const isValidEmail = (testEmail : string) => emailRegex.test(testEmail);

const strongRegex = /^(?=.*[!@.#$%^&?*])(?=.*[a-z]).{8,}$/;
const isValidPassword = (testPassword : string) => strongRegex.test(testPassword);

function checkLoginInputs(email: string, password: string) {
  return email.length > 0 && password.length > 0 && isValidEmail(email);
}

function checkSignupInputs(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  passwordConfirmation : string,
) {
  return firstName.length > 0
  && lastName.length > 0
  && email.length > 0
  && isValidPassword(password)
  && password === passwordConfirmation;
}

export {
  isValidEmail, checkLoginInputs, isValidPassword, checkSignupInputs,
};
