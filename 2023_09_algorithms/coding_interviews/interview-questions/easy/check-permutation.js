export const checkPermutation = (setence1, setence2) => {
  if (setence1.length !== setence2.length) {
    return false;
  }
  let hash = {};
  for (let index = 0; index < setence1.length; index++) {
    hash[setence1[index]] = true;
  }

  for (let index = 0; index < setence2.length; index++) {
    if (hash[setence2[index]]) {
      hash[setence2[index]] = false;
    } else {
      return false;
    }
  }
  return true;
};
