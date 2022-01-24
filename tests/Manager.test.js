// import employee parent class + manager
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

// test creation and constructor of a new manager
test("create a new employee class and assign a name", () => {
  var name = "Stella";
  var manager = new Manager(name);
  expect(manager.name).toBe("Stella");
});

// test getschool and getrole
test("create a new employee class and assign a name, id, email", () => {
  var manager = new Manager("Stella", 12, "stella@fakemail.com", "0808080808");
  expect(manager.getOfficeNumber()).toBe("0808080808");
  expect(manager.getRole()).toBe("Manager");
});
