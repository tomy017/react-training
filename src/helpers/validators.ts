const emailRegex = /\S+@\S+\.\S+/;
const isValidEmail = (testEmail : string) => emailRegex.test(testEmail);

export { isValidEmail };
