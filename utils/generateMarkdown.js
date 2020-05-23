function generateMarkdown(data) {
  return `
# Title: ${data.name}

# Description : 
 ** ${data.description}


# Usage :
 ${data.usage}

# License

 ${data.license}

 # contributors

 ${data.contributors}

 # github username

 ${data.github}

<img src="${data.githubImage}" alt="Avatar" width="30" />

Email: ${data.gHEmail}
`;
}

module.exports = generateMarkdown;
