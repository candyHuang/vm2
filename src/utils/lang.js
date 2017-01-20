// 判断参数是否是其中之一
/* eslint-disable import/prefer-default-export */
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i += 1) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
