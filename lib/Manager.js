// import employee parent class
const Employee = require("./Employee");

// the extends allows childclass to build on parent class Employee
// super allows to inherent parents constructor properties
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this;
  }
}

module.exports = Manager;
