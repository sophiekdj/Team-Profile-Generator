// import employee parent class
const Employee = require("../lib/Employee");

// test creation of class employee constructor
test("create a new employee class and assign a name", () => {
  var name = "Sam";
  var employee = new Employee(name);
  expect(employee.name).toBe("Sam");
});

// test getname, getid, getemail, getrole
test("create a new employee class and assign a name, id, email", () => {
  var employee = new Employee("Sam", 7, "s@fakemail.com");
  expect(employee.getName()).toBe("Sam");
  expect(employee.getId()).toBe(7);
  expect(employee.getEmail()).toBe("s@fakemail.com");
  expect(employee.getRole()).toBe("Employee");
});
