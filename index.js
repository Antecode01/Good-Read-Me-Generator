const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a brief description about your project?",
    },
    {
      type: "input",
      name: "table content",
      message: "Do you have table of contents in you project?",
    },
    {
      type: "input",
      name: "installation",
      message: "What is the installation key for your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is usage of your project?",
    },
    {
      type: "input",
      name: "license",
      message: "what is the license for your project?",
    },
    {
      type: "input",
      name: "contributors",
      message: "who contributed for your project?",
    },
    {
      type: "input",
      name: "test",
      message: "did you test your project?",
    },
    {
      type: "input",
      name: "image",
      message: "provide the url for github profile image?",
    },

    {
      type: "input",
      name: "email",
      message: "Provide the email for your github",
    },
  ])
  .then(function (data) {
    var filename = data.name.toLowerCase().split(" ").join("") + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
    });
  });

const questions = [];

function writeToFile(fileName, data) {}

function init() {}

init();
