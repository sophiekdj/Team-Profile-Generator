// import employee parent class + intern
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

// test creation and constructor of a new intern
test("create a new employee class and assign a name", () => {
  var name = "Sienna";
  var intern = new Intern(name);
  expect(intern.name).toBe("Sienna");
});

// test getschool and getrole
test("create a new employee class and assign a name, id, email", () => {
  var intern = new Intern(
    "Sienna",
    11,
    "sienna@fakemail.com",
    "Test University"
  );
  expect(intern.getSchool()).toBe("Test University");
  expect(intern.getRole()).toBe("Intern");
});
