import { capitalize } from '../utils/functions';

export const renderIndex = (
  value: string,
  record: any,
  index: number,
) => {
  return index + 1;
};

export const reduceName = (value: string) => {
  return value.split(' ').reduce((acc, curr, idx) => {
    return idx === 0 ? acc + curr : acc + ` ${curr[0]}.`;
  });
};

export const capitalizeText = (val: string) => {
  return capitalize(val);
};

export const transformDate = (val: string) => {
  return new Date(val).toLocaleString();
};
