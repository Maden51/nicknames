/* eslint-disable class-methods-use-this */
export default class Validator {
  validateUsername(str) {
    if (/\d{4,}/g.test(str)) {
      return false;
    }
    return (/^[a-zA-Z][\w-]*[a-zA-Z]$/i.test(str));
  }
}
