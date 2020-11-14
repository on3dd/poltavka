import { generate } from 'generate-password';

export const generatePassword = () => {
  const password = generate({
    length: 6,
    numbers: true,
    symbols: true,
    lowercase: true,
    uppercase: true,
    strict: true,
    excludeSimilarCharacters: true,
  });

  console.log('password', password);
};
