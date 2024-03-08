export const mappingDataBaseToResponse = <T>(
  data: Array<T> = [],
  // listKeys: Array<keyof T> = [],
): Array<T> => {
  if (!data?.length) return [];

  return data.map((item: T) => {
    return {
      ...item,
    };
  });
};

export const checkedRecord = <T>(data: Array<T>, key: keyof T): boolean => {
  return data.some((item) => item[key]);
};
