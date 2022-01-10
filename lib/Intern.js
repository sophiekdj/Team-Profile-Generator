// import employee parent class
const Employee = require("./Employee");

// the extends allows childclass to build on parent class Employee
// super allows to inherent parents constructor properties
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this;
  }
}

module.exports = Intern;
