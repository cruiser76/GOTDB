export const requiredField = (value) => {
  if (value) {
    return undefined;
  };
  return 'Field is required';
};

export const minLengthCreator = (minLength) => (value) => {
  if (value && value.length < minLength) return `Min length must be ${minLength}`;
  return undefined;
};

export const checkEmail = (value) => {
  const regexMail = /\S+@\S+\.[A-Z]{2,4}$/i;
  if (!regexMail.test(value)) {
    return 'mail is not valid'
  }
  return undefined;
};
