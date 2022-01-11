const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");
const fs = require("fs");

// path
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "new.html");

// to render an html file -> to create file using these prompts
// look up how to do
const render = require("./lib/htmlRender");

// Questions that apply to all employees
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the team member's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the team member's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team member's email?",
  },
  {
    type: "list",
    name: "role",
    message: "What is the team member's role?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

// additional questions based on role
const team = [];
const generateTeam = () => {
  inquirer
    .prompt(questions)
    .then((ans1) => {
      inquirer
        .prompt([
          {
            when: () => ans1.role === "Manager",
            type: "input",
            name: "officeNumber",
            message: "What is their office phone number?",
          },
          {
            when: () => ans1.role === "Engineer",
            type: "input",
            name: "github",
            message: "What is their github username?",
          },
          {
            when: () => ans1.role === "Intern",
            type: "input",
            name: "school",
            message: "What is their place of education?",
          },

          {
            type: "confirm",
            message: "Would you like to add another team member?",
            name: "addMember",
          },
        ])

        .then((ans2) => {
          if (ans1.role === "Manager") {
            const manager = new Manager(
              ans1.name,
              ans1.id,
              ans1.email,
              ans2.officeNumber
            );
            team.push(manager);
          }

          if (ans1.role === "Engineer") {
            const engineer = new Engineer(
              ans1.name,
              ans1.id,
              ans1.email,
              ans2.github
            );
            team.push(engineer);
          }

          if (ans1.role === "Intern") {
            const intern = new Intern(
              ans1.name,
              ans1.id,
              ans1.email,
              ans2.school
            );
            team.push(intern);
          }

          if (ans2.addMember) {
            generateTeam();
          } else {
            team.forEach((team) => {
              console.log(team);
            });
            fs.writeFile(outputPath, render(team), (err) => {
              if (err) {
                throw err;
              }
              console.log("Success!");
            });
          }
        });
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
};

generateTeam();
