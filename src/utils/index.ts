export const onlyNumbers = (value: string) => {
  return value ? value.replace(/\D/g, '') : value;
};
