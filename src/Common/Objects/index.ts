export const omit = (obj: object, keys: Array<string>): object => {
  for (const key of keys) {
    delete obj[key];
  }

  return obj;
};

export const recover = (obj: object, keys: Array<keyof object>): object => {
  for (const key of keys) {
    if (obj[key]) {
      delete obj[key];
    }
  }

  return obj;
};
