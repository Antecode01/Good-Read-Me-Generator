const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
let generateMarkdown = require("./utils/generateMarkdown");

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
      type: "list",
      name: "license",
      message: "what is the license for your project?",
      choices: ["MIT", "The Unlicense", "ISC", "Microsoft Public License"],
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
      name: "github",
      message: "provide your github username.",
    },
  ])
  .then(function (data) {
    let githubUsername = data.github;
    let githubUrl =
      "https://api.github.com/users/" + githubUsername + "/events/public";

    axios.get(githubUrl).then(function (res) {
      let githubImage = res.data[0].actor.avatar_url;
      data["githubImage"] = githubImage;
      let gHEmail = res.data[0].payload.commits[0].author.email;
      data["gHEmail"] = gHEmail;

      fs.writeFile("README.md", generateMarkdown(data), function (err) {
        if (err) {
          console.log(err);
        }
      });
    });
  });

const questions = [];

function writeToFile(fileName, data) {}

function init() {}

init();
