// import employee parent class
const Employee = require("./Employee");

// the extends allows childclass to build on parent class Employee
// super allows to inherent parents constructor properties
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
