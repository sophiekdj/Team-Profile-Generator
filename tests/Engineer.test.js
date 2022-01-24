// import employee parent class + engineer
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

// test creation of a new engineer
test("create a new employee class and assign a name", () => {
  var name = "Sasha";
  var engineer = new Engineer(name);
  expect(engineer.name).toBe("Sasha");
});

// test getgithub and getrole
test("create a new employee class and assign a name, id, email", () => {
  var engineer = new Engineer("Sasha", 10, "sasha@fakemail.com", "sashafgh");
  expect(engineer.getGithub()).toBe("sashafgh");
  expect(engineer.getRole()).toBe("Engineer");
});
