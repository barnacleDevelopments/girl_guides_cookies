module.exports = class Question {
  constructor(type, question, propName) {
    (this.type = type),
      (this.name = `\n${question}`),
      (this.propName = propName);
  }
};
