import { parsePhoneNumber } from 'libphonenumber-js/mobile';

export const validateMessages = {
  required: '"${label}" не может быть пустым!',
  whitespace: '"${label}" не может быть пустым!',
  string: {
    len: '"${label}" должен состоять из ${len} символов!',
    min: '"${label}" должен быть длиной от ${min} символов!',
    max: '"${label}" должен быть длиной до ${max} characters',
  },
};

export const phoneValidator = (_, value) => {
  try {
    const phone = parsePhoneNumber(value, 'RU');
    return phone.isValid()
      ? Promise.resolve()
      : Promise.reject();
  } catch (err) {
    return Promise.reject();
  }
};
