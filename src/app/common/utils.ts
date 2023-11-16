export const combineSingerList = (valueArray: Array<any>) => {
  const newValue = valueArray?.map(({ name }: any) => name);
  return newValue.toString();
};
